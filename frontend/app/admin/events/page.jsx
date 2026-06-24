"use client";

import { useEffect, useMemo, useState } from "react";

import api from "@/services/api";

import Swal from "sweetalert2";

import {
  Plus,
  Trash2,
  Pencil,
  CalendarDays,
  Search,
  Loader2,
  X,
  Image as ImageIcon,
} from "lucide-react";

import { useAuth } from "@clerk/nextjs";

export default function AdminEventsPage() {
  const { getToken } = useAuth();

  const [events, setEvents] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);

  const [processing, setProcessing] = useState(false);

  const [preview, setPreview] = useState("");

  const [search, setSearch] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("all");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    category: "upcoming",
    eventDate: "",
  });

  // ==========================================
  // FETCH EVENTS
  // ==========================================
  const fetchEvents = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/events");

      setEvents(data.events);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to Load Events",
        text: error?.response?.data?.message || error.message,
        background: "#1A1411",
        color: "#fff",
        confirmButtonColor: "#9C7B57",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // ==========================================
  // LOCK BODY SCROLL
  // ==========================================
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  // ==========================================
  // FILTERED EVENTS
  // ==========================================
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = event.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" ? true : event.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [events, search, categoryFilter]);

  // ==========================================
  // INPUT CHANGE
  // ==========================================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // IMAGE CHANGE
  // ==========================================
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      image: file,
    });

    setPreview(URL.createObjectURL(file));
  };

  // ==========================================
  // RESET FORM
  // ==========================================
  const resetForm = () => {
    setEditingId(null);

    setPreview("");

    setFormData({
      title: "",
      description: "",
      image: null,
      category: "upcoming",
      eventDate: "",
    });
  };

  // ==========================================
  // CREATE / UPDATE
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);

      const token = await getToken();

      const submitData = new FormData();

      submitData.append("title", formData.title);

      submitData.append("description", formData.description);

      submitData.append("category", formData.category);

      submitData.append("eventDate", formData.eventDate);

      if (formData.image) {
        submitData.append("image", formData.image);
      }

      if (editingId) {
        await api.put(`/events/${editingId}`, submitData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await api.post("/events", submitData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      Swal.fire({
        icon: "success",
        title: editingId ? "Event Updated" : "Event Created",
        background: "#1A1411",
        color: "#fff",
        confirmButtonColor: "#9C7B57",
      });

      setShowModal(false);

      resetForm();

      fetchEvents();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Operation Failed",
        text: error?.response?.data?.message || error.message,
        background: "#1A1411",
        color: "#fff",
        confirmButtonColor: "#9C7B57",
      });
    } finally {
      setProcessing(false);
    }
  };

  // ==========================================
  // EDIT
  // ==========================================
  const handleEdit = (event) => {
    setEditingId(event._id);

    setPreview(event.image);

    setFormData({
      title: event.title,
      description: event.description,
      image: null,
      category: event.category,
      eventDate: event.eventDate?.split("T")[0] || "",
    });

    setShowModal(true);
  };

  // ==========================================
  // DELETE
  // ==========================================
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Event?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#9C7B57",
      background: "#1A1411",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      const token = await getToken();

      await api.delete(`/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Deleted Successfully",
        background: "#1A1411",
        color: "#fff",
        confirmButtonColor: "#9C7B57",
      });

      fetchEvents();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: error?.response?.data?.message || error.message,
        background: "#1A1411",
        color: "#fff",
        confirmButtonColor: "#9C7B57",
      });
    }
  };

  return (
    <div className="text-white">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#F5EBDD]">
            Events Management
          </h1>

          <p className="mt-3 text-[#C7B299]">
            Create, edit and manage brewery events.
          </p>
        </div>

        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="
            px-6 py-3 rounded-2xl
            bg-[#9C7B57]
            hover:bg-[#B08A61]
            transition-all duration-300
            flex items-center gap-2
            font-semibold
          "
        >
          <Plus size={18} />
          Add Event
        </button>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* SEARCH */}
        <div
          className="
            flex items-center gap-3
            bg-[#1A1411]
            border border-[#E8D8C3]/10
            rounded-2xl
            px-5
            h-14
            flex-1
          "
        >
          <Search size={18} className="text-[#9C7B57]" />

          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              bg-transparent
              outline-none
              w-full
            "
          />
        </div>

        {/* CATEGORY */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="
            h-14 rounded-2xl
            bg-[#1A1411]
            border border-[#E8D8C3]/10
            px-5
            outline-none
            min-w-[220px]
          "
        >
          <option value="all">All Categories</option>

          <option value="upcoming">Upcoming</option>

          <option value="weekly">Weekly</option>

          <option value="sports">Sports</option>

          <option value="offer">Offer</option>
        </select>
      </div>

      {/* TABLE */}
      <div
        className="
          overflow-hidden rounded-3xl
          border border-[#E8D8C3]/10
          bg-[#1A1411]
        "
      >
        {/* HEAD */}
        <div
          className="
            grid grid-cols-5
            px-6 py-5
            border-b border-[#E8D8C3]/10
            text-[#C7B299]
            text-sm uppercase tracking-wider
          "
        >
          <div>Image</div>
          <div>Title</div>
          <div>Category</div>
          <div>Date</div>
          <div>Actions</div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="py-20 flex justify-center">
            <Loader2
              className="
                animate-spin
                text-[#C7B299]
              "
              size={38}
            />
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="py-20 text-center text-[#C7B299]">
            No events found.
          </div>
        ) : (
          filteredEvents.map((event) => (
            <div
              key={event._id}
              className="
                  grid grid-cols-5
                  items-center
                  px-6 py-5
                  border-b border-[#E8D8C3]/5
                  hover:bg-[#241B17]/40
                  transition-all duration-300
                "
            >
              {/* IMAGE */}
              <div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="
                      w-24 h-20 object-cover
                      rounded-2xl
                      border border-[#E8D8C3]/10
                    "
                />
              </div>

              {/* TITLE */}
              <div>
                <h3 className="font-semibold text-[#F5EBDD]">{event.title}</h3>

                <p className="text-sm text-[#9C7B57] mt-1 line-clamp-1">
                  {event.description}
                </p>
              </div>

              {/* CATEGORY */}
              <div>
                <span
                  className="
                      px-4 py-2 rounded-full
                      bg-[#241B17]
                      text-[#C7B299]
                      text-sm capitalize
                    "
                >
                  {event.category}
                </span>
              </div>

              {/* DATE */}
              <div
                className="
                    flex items-center gap-2
                    text-[#C7B299]
                  "
              >
                <CalendarDays size={16} />

                {event.eventDate
                  ? new Date(event.eventDate).toLocaleDateString("en-IN")
                  : "No Date"}
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleEdit(event)}
                  className="
                      w-11 h-11 rounded-xl
                      bg-[#241B17]
                      hover:bg-[#32251E]
                      flex items-center justify-center
                      transition-all duration-300
                    "
                >
                  <Pencil size={18} />
                </button>

                <button
                  onClick={() => handleDelete(event._id)}
                  className="
                      w-11 h-11 rounded-xl
                      bg-red-500/10
                      hover:bg-red-500/20
                      text-red-400
                      flex items-center justify-center
                      transition-all duration-300
                    "
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/70
            backdrop-blur-sm
            flex items-center justify-center
            p-4
          "
        >
          <div
            className="
              w-full max-w-3xl
              rounded-3xl
              bg-[#1A1411]
              border border-[#E8D8C3]/10
              p-8
              relative
              max-h-[92vh]
              overflow-y-auto
              no-scrollbar
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => {
                setShowModal(false);
                resetForm();
              }}
              className="
                absolute top-5 right-5
                w-10 h-10 rounded-full
                bg-[#241B17]
                hover:bg-[#32251E]
                transition-all duration-300
                flex items-center justify-center
              "
            >
              <X size={18} />
            </button>

            {/* TITLE */}
            <h2 className="text-3xl font-bold text-[#F5EBDD] mb-8">
              {editingId ? "Update Event" : "Create Event"}
            </h2>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* TITLE */}
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                required
                value={formData.title}
                onChange={handleChange}
                className="
                  w-full h-14 rounded-2xl
                  bg-[#241B17]
                  border border-[#E8D8C3]/10
                  px-5
                  outline-none
                "
              />

              {/* DESCRIPTION */}
              <textarea
                name="description"
                placeholder="Event Description"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                className="
                  w-full rounded-2xl
                  bg-[#241B17]
                  border border-[#E8D8C3]/10
                  px-5 py-4
                  outline-none
                "
              />

              {/* CATEGORY + DATE */}
              <div className="grid md:grid-cols-2 gap-5">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="
                    w-full h-14 rounded-2xl
                    bg-[#241B17]
                    border border-[#E8D8C3]/10
                    px-5
                    outline-none
                  "
                >
                  <option value="upcoming">Upcoming</option>

                  <option value="weekly">Weekly</option>

                  <option value="sports">Sports</option>

                  <option value="offer">Offer</option>
                </select>

                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="
                    w-full h-14 rounded-2xl
                    bg-[#241B17]
                    border border-[#E8D8C3]/10
                    px-5
                    outline-none
                  "
                />
              </div>

              {/* IMAGE */}
              <div
                className="
                  border border-dashed
                  border-[#E8D8C3]/20
                  rounded-3xl
                  p-6
                  bg-[#241B17]/50
                "
              >
                <div className="flex items-center gap-3 mb-5">
                  <ImageIcon size={20} className="text-[#9C7B57]" />

                  <p className="text-[#C7B299]">Upload Event Image</p>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="
                    w-full
                    file:bg-[#9C7B57]
                    file:border-0
                    file:px-5
                    file:py-3
                    file:rounded-xl
                    file:text-white
                    file:font-medium
                    file:mr-4
                  "
                />

                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="
                      mt-6
                      max-h-[350px]
                      w-full
                      object-cover
                      rounded-3xl
                    "
                  />
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={processing}
                className="
                  w-full h-14 rounded-2xl
                  bg-[#9C7B57]
                  hover:bg-[#B08A61]
                  transition-all duration-300
                  font-semibold
                  flex items-center justify-center gap-2
                "
              >
                {processing && <Loader2 className="animate-spin" size={18} />}

                {processing
                  ? "Processing..."
                  : editingId
                    ? "Update Event"
                    : "Create Event"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
