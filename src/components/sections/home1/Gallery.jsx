import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const posts = [
    {
        type: 'image',
        title: 'Mesh Door',
        image: '/assets/images/contact_now.jpg',
        slug: 'project-alpha',
        location: 'noida',
        description: 'recently install the meshdoor in the noida'
    },
    {
        type: 'images',
        title: 'Invisible Grill',
        image: '/assets/images/HomeHeroNav.png', // fallback thumbnail
        // video: '/media/video1.mp4',
        slug: 'fire-drill',
        location: 'pune',
        description: 'recently install the Invisible Grill in the pune'
    },
    {
        type: 'image',
        title: 'Invisible Grill',
        image: '/assets/images/invisible2.jpg',
        slug: 'wiring-inspection',
        location: 'mumbai',
        description: 'recently install the Invisible Grill in the mumbai'
    },
    {
        type: 'image',
        title: 'Ivisible Grill',
        image: 'https://invhub.in/wp-content/uploads/2025/03/invisible2.webp',
        video: '/media/video2.mp4',
        slug: 'warehouse-safety',
        location: 'bangalore',
        description: 'recently install the Invisible Grill in the Bangalore'
    },
    {
        type: 'image',
        title: 'Ivisible Grill',
        image: 'https://invhub.in/wp-content/uploads/2025/03/invisible7.webp',
        video: '/media/video2.mp4',
        slug: 'warehouse-safety',
        location: 'bangalore',
        description: 'recently install the Invisible Grill in the Bangalore '
    },
    {
        type: 'image',
        title: 'Ivisible Grill',
        image: 'https://invhub.in/wp-content/uploads/2025/03/invisible3.webp',
        video: '/media/video2.mp4',
        slug: 'warehouse-safety',
        location: 'bangalore',
        description: 'recently install the Invisible Grill in the Bangalore'
    },
    // Add more items as needed
];

const itemsPerPage = 6;

const BlogGallery = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = posts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mx-auto py-16">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Our Recent Projects</h2>
                <p className="text-gray-600">
                    Explore our work in action — images & videos from real projects.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="row flex flex-wrap -mx-4">
                {currentItems.map((post, index) => (
                    <div
                        key={index}
                        className="col-xl-4 col-lg-4 px-4 mb-10 wow fadeInUp"
                        data-wow-delay="100ms"
                    >
                        <div className="blog-one__single shadow-md rounded-xl h-full overflow-hidden bg-white transition hover:shadow-lg">
                            <div className="blog-one__img-box relative">
                                <div className="blog-one__img relative w-full h-60 overflow-hidden">
                                    {post.type === 'video' ? (
                                        <video
                                            controls
                                            className="w-full h-full object-cover"
                                            poster={post.image}
                                        >
                                            <source src={post.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                    <Link
                                        to={`/post/${post.slug}`}
                                        className="blog-one__link absolute inset-0"
                                        aria-label="blog post"
                                    >
                                        <span className="sr-only">Read more</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-one__content px-3 pt-4">
                                <div className="blog-one__user text-sm text-gray-500">
                                    <p className="flex items-center gap-2 text-sm">
                                        <span className="icon-location"></span> {post.location}
                                    </p>
                                </div>
                                <h3 className="blog-one__title text-lg font-semibold text-gray-800">
                                    <Link to={`/post/${post.slug}`} className="hover:text-[#D4AF37]">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className='text-xs text-gray-600'>{post.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Small Pagination */}
            <div className="flex justify-center mt-4 space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-8 h-8 rounded-full text-sm border font-medium ${currentPage === i + 1
                            ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogGallery;
