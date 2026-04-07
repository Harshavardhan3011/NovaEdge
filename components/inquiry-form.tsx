type InquiryFormProps = {
  className?: string;
  submitLabel?: string;
};

const inputClassName =
  "w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100";

export function InquiryForm({ className, submitLabel = "Get Quotes" }: InquiryFormProps) {
  return (
    <div className={className}>
      <div className="rounded-md bg-slate-200 p-5 sm:p-6">
        <h3 className="text-center text-2xl font-semibold text-slate-700">Request for</h3>
        <p className="mt-1 text-center text-2xl font-semibold text-slate-700">
          Class Room and Online Training Quotation
        </p>

        <div className="mt-5 rounded-full border-2 border-blue-500 bg-blue-500 p-0.5">
          <div className="grid grid-cols-2">
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2.5 text-base font-semibold text-slate-700"
            >
              Class Room
            </button>
            <button
              type="button"
              className="rounded-full px-4 py-2.5 text-base font-semibold text-white"
            >
              Online
            </button>
          </div>
        </div>

        <form className="mt-5 space-y-5">
          <input type="text" name="name" placeholder="Enter Your Name" className={inputClassName} />

          <input type="email" name="email" placeholder="Enter Your email" className={inputClassName} />

          <input type="tel" name="phone" placeholder="Enter Your Mobile No." className={inputClassName} />

          <select
            name="experience"
            aria-label="Select Experience"
            title="Select Experience"
            className={inputClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Select Experience
            </option>
            <option>Fresher</option>
            <option>0-2 years</option>
            <option>2-5 years</option>
            <option>5+ years</option>
          </select>

          <select
            name="jobRole"
            aria-label="Select Job Role"
            title="Select Job Role"
            className={inputClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Select Job Role
            </option>
            <option>Student</option>
            <option>Software Developer</option>
            <option>QA Engineer</option>
            <option>Career Switcher</option>
          </select>

          <select
            name="courseName"
            aria-label="Select Course"
            title="Select Course"
            className={inputClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Select Course
            </option>
            <option>Technical Programs</option>
            <option>Soft Skills Programs</option>
            <option>Aptitude Programs</option>
          </select>

          <select
            name="type"
            aria-label="Select Type"
            title="Select Type"
            className={inputClassName}
            defaultValue=""
          >
            <option value="" disabled>
              Select Type
            </option>
            <option>Online</option>
            <option>Offline</option>
            <option>Online / Offline</option>
          </select>

          <div className="pt-1 text-center">
            <button
              type="submit"
              className="inline-flex min-w-44 items-center justify-center rounded-2xl bg-blue-600 px-8 py-3.5 text-xl font-semibold text-white shadow-md shadow-blue-300 transition hover:bg-blue-700"
            >
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
