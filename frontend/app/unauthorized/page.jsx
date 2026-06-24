import Link from "next/link";

export default function UnauthorizedPage() {

  return (
    <div
      className="
        min-h-screen
        bg-[#0E0B09]
        flex items-center
        justify-center
        px-6
      "
    >

      <div
        className="
          max-w-xl w-full
          rounded-[40px]
          border border-[#E8D8C3]/10
          bg-[#1A1411]
          p-12
          text-center
        "
      >

        <div
          className="
            w-24 h-24
            mx-auto mb-8
            rounded-full
            bg-red-500/10
            flex items-center
            justify-center
            text-red-400
            text-5xl
          "
        >
          ⚠
        </div>

        <h1
          className="
            text-4xl font-bold
            text-[#F5EBDD]
            mb-5
          "
        >
          Access Denied
        </h1>

        <p
          className="
            text-[#C7B299]
            leading-8
            mb-10
          "
        >
          You are not authorized
          to access the admin
          dashboard.

          Please contact the
          administrator if you
          believe this is a mistake.
        </p>

        <Link
          href="/"
          className="
            inline-flex items-center
            justify-center

            px-8 py-4 rounded-2xl

            bg-[#9C7B57]
            hover:bg-[#B08A61]

            text-white
            font-semibold

            transition-all duration-300
          "
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}