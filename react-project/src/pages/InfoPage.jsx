import { Link } from "react-router-dom";

const InfoPage = ({ title, description, actionLabel = "Back to Home", actionTo = "/" }) => {
  return (
    <section className="min-h-[60vh] bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-4 leading-7 text-gray-600">{description}</p>
        <Link
          to={actionTo}
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          {actionLabel}
        </Link>
      </div>
    </section>
  );
};

export default InfoPage;
