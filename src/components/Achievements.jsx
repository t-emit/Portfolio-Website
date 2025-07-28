import { useRef, useState } from 'react';
import { useInViewAnimation } from './Ani';
import cert1 from '../assets/bits.jpg';
import cert2 from '../assets/Pub_cert1.Png';
import Node from '../assets/Node js cert talat greatlearning.png';
import Node2 from '../assets/Talat node js badge.png';
import py from '../assets/Screenshot 2025-07-28 115954.png';
import py1 from '../assets/Screenshot 2025-07-28 120030.png';
import py2 from '../assets/Screenshot 2025-07-28 120049.png';
import py3 from '../assets/Screenshot 2025-07-28 120106.png';

export default function Achievements() {
  const [ref, inView] = useInViewAnimation();
  const [modalImage, setModalImage] = useState(null);
  const scrollRef = useRef(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  const items = [
    {
      title: "AI & ML Workshop - BITS Pilani",
      description: "Built a chatbot using the Wikipedia API during an AI workshop.",
      image: cert1,
    },
    {
      title: "Research Publication Certificate",
      description: "A certificate of publication on an AI-powered skincare system in the IRJAEH journal.",
      image: cert2,
    },
    {
      title: " NodeJS Course Completion Certificate",
      description: "A certificate of completion for a NodeJS in Hindi online course from Great Learning Academy.",
      image: Node,
    },
    {
      title: "Node.js Data APIs Digital Badge",
      description: "A Skillsoft digital badge for completing a course on Creating Data APIs Using Node.js",
      image: Node2,
    },
    {
      title: " Web Development Training Certificate",
      description: "A course completion certificate in The Complete Web Development Training Courses from Infosys Springboard.",
      image: py2,
    },
    {
      title: "Java Programming Course Certificate",
      description: "A course completion certificate in Programming using Java from Infosys Springboard.",
      image: py,
    },
    {
      title: "Python Fundamentals Course Certificate (Part 1)",
      description: "A course completion certificate in Programming Fundamentals using Python - Part 1 from Infosys Springboard.",
      image: py3,
    },
    {
      title: " Python Fundamentals Course Certificate (Part 2)",
      description: "A course completion certificate in Programming Fundamentals using Python - Part 2 from Infosys Springboard.",
      image: py1,
    },
  ];

  return (
    <section
      ref={ref}
      className={`section achievements-section transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="section-title text-3xl font-bold text-center mb-6">Achievements & Certificates</h2>

      {/* Scrollable Cards */}
      <div className="achievement-scroll-wrapper overflow-x-auto scrollbar-hide px-4">
        <div className="achievement-scroll flex gap-6" ref={scrollRef}>
          {items.map((item, index) => (
            <div key={index} className="card-wrapper flex-shrink-0 w-64">
              <div
                className="card bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 cursor-pointer transform transition-transform hover:scale-105 h-full flex flex-col"
                onClick={() => openModal(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="achievement-image w-full h-40 object-cover rounded-md"
                />
                <h3 className="achievement-title mt-3 font-semibold text-lg text-center text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="achievement-desc text-sm text-center text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
         <h2 className="section-title text-3xl font-bold text-center mb-6">Scroll Ahead ➪</h2>
      {/* Modal Zoom View */}
      {modalImage && (
        <div
          className="modal-overlay fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="modal-content relative max-w-3xl w-full p-4 bg-white dark:bg-gray-900 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Full certificate"
              className="modal-img w-full h-auto object-contain rounded"
            />
            <button
              onClick={closeModal}
              className="modal-close absolute top-2 right-3 text-white text-2xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
