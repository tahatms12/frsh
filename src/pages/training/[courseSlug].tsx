import React from 'react';
import { useParams, Link } from 'react-router-dom';
import catalogData from '../../data/training/courseCatalog.json';
import type { Catalog } from '../../types/training';
import CourseStepper from '../../components/training/CourseStepper';

const catalog = catalogData as Catalog;

const TrainingCoursePage: React.FC = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const course = catalog.courses.find((c) => c.slug === courseSlug);

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-red-600">Course not found.</p>
        <Link className="text-indigo-600 underline" to="/training">Back to catalog</Link>
      </div>
    );
  }

  const totalTime = course.days.reduce((acc, d) => acc + d.estimatedTimeMinutes, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Link className="text-indigo-600 underline" to="/training">← Back to catalog</Link>
      <h1 className="text-3xl font-bold mt-2">{course.title}</h1>
      <p className="text-gray-700 mt-2">{course.summary}</p>
      <div className="mt-3 text-sm text-gray-600">Roles: {course.roles.join(', ')}</div>
      <div className="mt-1 text-sm text-gray-600">Tags: {course.tags.join(', ')}</div>
      <div className="mt-1 text-sm text-gray-600">Estimated total time: {totalTime} minutes</div>

      <CourseStepper course={course} />

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Outcomes</h2>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          {course.outcomes.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Source excerpts</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap border border-gray-200">{course.source.raw.join('\n')}</pre>
      </section>
    </div>
  );
};

export default TrainingCoursePage;
