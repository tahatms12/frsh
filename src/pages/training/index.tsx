import React, { useMemo, useState } from 'react';
import catalogData from '../../data/training/courseCatalog.json';
import type { Catalog, Course } from '../../types/training';

const catalog = catalogData as Catalog;

const TrainingCatalogPage: React.FC = () => {
  const [roleFilter, setRoleFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');
  const [search, setSearch] = useState('');

  const filteredCourses = useMemo(() => {
    return catalog.courses.filter((course) => {
      const matchesRole = roleFilter ? course.roles.includes(roleFilter) : true;
      const matchesTag = tagFilter ? course.tags.includes(tagFilter) : true;
      const matchesSearch = search
        ? course.title.toLowerCase().includes(search.toLowerCase()) || course.summary.toLowerCase().includes(search.toLowerCase())
        : true;
      return matchesRole && matchesTag && matchesSearch;
    });
  }, [roleFilter, tagFilter, search]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Training Catalog</h1>
      <p className="text-gray-700 mb-6">Filter courses by role or tag to assign targeted learning plans.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6" aria-label="Training filters">
        <label className="block text-sm">
          <span className="text-gray-700">Role</span>
          <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="mt-1 w-full border rounded px-3 py-2">
            <option value="">All</option>
            {catalog.roles.map((role) => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="text-gray-700">Tag</span>
          <select value={tagFilter} onChange={(e) => setTagFilter(e.target.value)} className="mt-1 w-full border rounded px-3 py-2">
            <option value="">All</option>
            {Array.from(new Set(catalog.courses.flatMap((c) => c.tags))).map((tag) => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm col-span-2">
          <span className="text-gray-700">Search</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or summary"
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
        {filteredCourses.map((course) => (
          <a
            key={course.id}
            href={`/training/${course.slug}`}
            role="listitem"
            className="border rounded-lg p-4 hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-sm text-gray-700 mt-1 line-clamp-3">{course.summary}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">7-day plan</span>
              {course.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 rounded">{tag}</span>
              ))}
            </div>
            <div className="mt-2 text-xs text-gray-600">Roles: {course.roles.join(', ')}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrainingCatalogPage;
