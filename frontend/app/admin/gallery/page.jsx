"use client";

import { useEffect, useMemo, useState } from "react";

import api from "@/services/api";

import { useAuth } from "@clerk/nextjs";

import Swal from "sweetalert2";

import {
  Plus,
  Trash2,
  Pencil,
  Search,
  X,
  Loader2,
  CalendarDays,
  Image as ImageIcon,
} from "lucide-react";

export default function AdminGalleryPage() {
  const { getToken } = useAuth();

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const [processing, setProcessing] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [preview, setPreview] = useState("");

  const [search, setSearch] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("all");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "events",
    galleryDate: "",
    image: null,
  });

  // ==========================================
  // FETCH GALLERY
  // ==========================================
  const fetchGallery = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/gallery");

      setItems(data.items || []);
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Failed to load gallery items",
        background: "#1A1411",
        color: "#F5EBDD",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

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
  // FILTERED DATA
  // ==========================================
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" ? true : item.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [items, search, categoryFilter]);

  // ==========================================
  // HANDLE INPUT
  // ==========================================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // HANDLE IMAGE
  // ==========================================
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // 4MB limit
    if (file.size > 4 * 1024 * 1024) {
      Swal.fire({
        icon: "error",
        title: "Image Too Large",
        text: "Please upload an image smaller than 4 MB",
        background: "#1A1411",
        color: "#F5EBDD",
      });
      return;
    }

    setFormData({
      ...formData,
      image: file,
    });

    setPreview(URL.createObjectURL(file));
  };

  // ==========================================
  // OPEN CREATE MODAL
  // ==========================================
  const openCreateModal = () => {
    setEditingId(null);

    setPreview("");

    setFormData({
      title: "",
      description: "",
      category: "events",
      galleryDate: "",
      image: null,
    });

    setShowModal(true);
  };

  // ==========================================
  // OPEN EDIT MODAL
  // ==========================================
  const openEditModal = (item) => {
    setEditingId(item._id);

    setPreview(item.image);

    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
      galleryDate: item.galleryDate?.split("T")[0] || "",
      image: null,
    });

    setShowModal(true);
  };

  // ==========================================
  // HANDLE SUBMIT
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);

      const token = await getToken();

      const data = new FormData();

      data.append("title", formData.title);

      data.append("description", formData.description);

      data.append("category", formData.category);

      data.append("galleryDate", formData.galleryDate);

      if (formData.image) {
        data.append("image", formData.image);
      }

      if (editingId) {
        await api.put(`/gallery/${editingId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        Swal.fire({
          icon: "success",
          title: "Updated",
          text: "Gallery updated successfully",
          background: "#1A1411",
          color: "#F5EBDD",
        });
      } else {
        await api.post("/gallery", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        Swal.fire({
          icon: "success",
          title: "Created",
          text: "Gallery item added successfully",
          background: "#1A1411",
          color: "#F5EBDD",
        });
      }

      setShowModal(false);

      fetchGallery();
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Operation Failed",
        text: error.response?.data?.message || "Something went wrong",
        background: "#1A1411",
        color: "#F5EBDD",
      });
    } finally {
      setProcessing(false);
    }
  };

  // ==========================================
  // DELETE
  // ==========================================
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Gallery Item?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9C7B57",
      cancelButtonColor: "#241B17",
      background: "#1A1411",
      color: "#F5EBDD",
    });

    if (!result.isConfirmed) return;

    try {
      setProcessing(true);

      const token = await getToken();

      await api.delete(`/gallery/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Gallery item deleted successfully",
        background: "#1A1411",
        color: "#F5EBDD",
      });

      fetchGallery();
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: error.response?.data?.message || "Something went wrong",
        background: "#1A1411",
        color: "#F5EBDD",
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#F5EBDD]">
            Gallery Management
          </h1>

          <p className="mt-3 text-[#C7B299]">
            Create, edit and manage gallery images.
          </p>
        </div>

        <button
          onClick={openCreateModal}
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
          Add Gallery
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
            placeholder="Search gallery..."
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

          <option value="events">Events</option>

          <option value="food">Food</option>

          <option value="ambience">Ambience</option>

          <option value="sports">Sports</option>

          <option value="dj-night">DJ Night</option>

          <option value="cocktails">Cocktails</option>

          <option value="crowd">Crowd</option>
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
        {/* TABLE HEAD */}
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
        ) : filteredItems.length === 0 ? (
          <div className="py-20 text-center text-[#C7B299]">
            No gallery items found.
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item._id}
              className="
                grid grid-cols-5
                items-center
                px-6 py-5
                border-b border-[#E8D8C3]/5
              "
            >
              {/* IMAGE */}
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-24 h-20 object-cover
                    rounded-2xl
                    border border-[#E8D8C3]/10
                  "
                />
              </div>

              {/* TITLE */}
              <div>
                <h3 className="font-semibold text-[#F5EBDD]">{item.title}</h3>

                <p className="text-sm text-[#9C7B57] mt-1 line-clamp-1">
                  {item.description}
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
                  {item.category}
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

                {item.galleryDate
                  ? new Date(item.galleryDate).toLocaleDateString("en-IN")
                  : "No Date"}
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => openEditModal(item)}
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
                  onClick={() => handleDelete(item._id)}
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
              onClick={() => setShowModal(false)}
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
              {editingId ? "Edit Gallery Item" : "Add Gallery Item"}
            </h2>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* TITLE */}
              <input
                type="text"
                name="title"
                placeholder="Gallery Title"
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
                placeholder="Gallery Description"
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
                  <option value="events">Events</option>

                  <option value="food">Food</option>

                  <option value="ambience">Ambience</option>

                  <option value="sports">Sports</option>

                  <option value="dj-night">DJ Night</option>

                  <option value="cocktails">Cocktails</option>

                  <option value="crowd">Crowd</option>
                </select>

                <input
                  type="date"
                  name="galleryDate"
                  value={formData.galleryDate}
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

                  <p className="text-[#C7B299]">Upload Gallery Image</p>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
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
                      h-72 w-full
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
                    ? "Update Gallery"
                    : "Create Gallery"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
