import React from 'react'
import { Link } from 'react-router-dom';
interface IBlog{
        id: string;
        title: string,
        desc: string,
        img: string,
        // authorLogo: string,
        authorName: string,
        date: string,
        href: string
}
interface IArticle{
    key: number,
    items: IBlog
}
export const Blog : React.FC<IArticle>  = ({key,items} : IArticle) => {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <Link to={`/post/`+ items.id}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        {/* <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} /> */}
                                    </div>
                                    <div className="ml-0">
                                        <span className="block text-gray-900">By : {items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </Link>
                        </article>
  )
}
