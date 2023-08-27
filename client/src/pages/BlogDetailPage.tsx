import React from 'react'
import { useParams } from 'react-router-dom';

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
interface Props {
  blogs: Blog[];
  match: {
    params: {
      id: string;
    };
  };
}
const BlogDetailPage :React.FC<Props> = ({blogs}) => {
    const { id } = useParams<{ id: string }>();
    const blog = blogs?.find(b => b.id === id);

    if (!blog) {
        return <div>Blog not found.</div>;
      }
  return (
    <div>
        <article>
            <div>Categorie Small Text</div>
            <div>{blog.title}</div>
            <div>{blog.authorName}</div>
            <img src={blog.img} alt="Big Image of the Blog" />
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem ex, distinctio aliquam neque maiores exercitationem inventore saepe sapiente id perspiciatis possimus doloribus ipsam, impedit quae voluptatem. Sunt rerum illo et.
            Impedit quo, qui consequatur aliquam dolor aperiam reiciendis rerum asperiores ad soluta rem enim natus eum magni provident possimus eligendi ratione omnis. Numquam doloremque quasi tenetur molestiae corporis eaque cum?
            Harum eligendi eveniet pariatur ab optio exercitationem, architecto repudiandae officiis. Asperiores magnam fugiat omnis. Assumenda nobis minus veritatis culpa consequuntur suscipit consectetur, quaerat delectus facere exercitationem? Porro rem in laudantium?
            Pariatur sint necessitatibus, ad nulla natus tenetur neque enim facere tempora cupiditate architecto sequi itaque dolores sunt ab aut veritatis odit, suscipit doloribus dignissimos consequatur accusamus. Quam dolor molestias distinctio?
            Ducimus eveniet minus, libero quod voluptatum fugiat quos iure fugit blanditiis! Incidunt quia, maxime ullam optio suscipit hic commodi modi dignissimos in rerum, dolore inventore ratione ipsam, atque facilis quisquam!
            Odio, reiciendis delectus itaque illo, excepturi ex laborum quidem molestias quia magni error voluptatem? Sunt nobis iusto modi suscipit? Atque inventore quis voluptatibus dicta omnis sequi. Provident ipsum id dolorem.
            Voluptates fugiat impedit consectetur doloremque. Minima illum assumenda exercitationem repellendus, ut autem possimus accusamus amet? Deleniti at dolores, debitis minus cum molestias laudantium sunt adipisci unde, delectus eius laborum harum.
            A numquam ipsa ea modi iusto veniam dolore eos, cupiditate, facere distinctio voluptatem sit similique sed soluta illo sequi minus? Minima labore repellendus quisquam ut maxime eligendi aperiam iusto unde.
            Soluta molestias ipsa dolorum laboriosam labore tempora unde quo aperiam nihil iusto quidem velit, consequatur eum. Repellendus mollitia minus, ipsum, quaerat doloribus provident accusantium veritatis sunt, numquam tempore odio cupiditate!
            Odit cumque ea consequuntur est, debitis soluta sit quas fugiat laboriosam incidunt ipsam, eligendi, sequi corporis officiis praesentium atque mollitia! Corrupti error deserunt officiis repellendus magnam facilis commodi rerum architecto!
            Consequatur dolor iure tempore iste eius sequi reiciendis vitae voluptates. Dolor quas inventore ea doloremque, voluptatum voluptate deserunt nemo quasi tempora sapiente deleniti temporibus nam? Quisquam exercitationem sed veniam vitae.
            Quas iusto dolor repudiandae, atque eos commodi voluptatibus error, quisquam aliquid rem eum distinctio. Alias nobis reiciendis impedit, ipsam odio dolorum. Totam dolor dolore natus voluptas doloremque asperiores nobis. Voluptas?
            Odio nobis iusto laboriosam tempore voluptate quisquam nostrum numquam pariatur veritatis? Beatae id in vitae est voluptas praesentium, dolorum assumenda, dolorem non repellendus quae consequatur? Illum magni animi nemo quia!
            Error quasi modi quam itaque culpa doloremque, expedita quisquam iusto enim tenetur sint quas numquam obcaecati blanditiis laboriosam labore, illum fugiat eaque vero laborum pariatur? Sint voluptates rerum veniam itaque.
            Libero ad rem dignissimos, quia dolorem ex nobis deleniti inventore, nulla ea necessitatibus architecto deserunt aperiam temporibus dolores voluptas fugiat quidem cumque tempore veniam non accusantium. Ipsa aliquid officia quam.
            Corrupti ex quisquam placeat et delectus labore ut dolore repellat recusandae. Alias rerum ea voluptate quam aspernatur culpa qui, provident, itaque quaerat at, nostrum magni harum quidem accusantium ullam tempore?
            Totam quam minima, ipsum ratione esse officiis dolore molestias quos error nobis maiores, ipsa id culpa! Excepturi atque ullam et cupiditate eum ab iure. Sequi fugiat possimus deleniti molestiae eius!
            Maxime sit, officia mollitia incidunt, pariatur nulla cum quibusdam adipisci architecto cupiditate ut voluptas omnis distinctio! Cumque, dolorum consequuntur, ut dolores quo maxime dignissimos debitis voluptatem doloribus repellat modi sint!
            Laudantium commodi provident eveniet ab delectus aliquam quos alias non porro, nobis voluptatibus cumque quam officiis. Nemo minima magni explicabo illo quasi rerum, ipsa quas illum cum pariatur, eos libero?
            Voluptas, iusto dolorum quisquam beatae nemo saepe praesentium, corrupti sequi eius eos, alias officia. Enim, animi? Explicabo aspernatur atque praesentium, nesciunt, delectus eum natus cumque omnis dolores quibusdam assumenda vitae.
            Iure suscipit veniam blanditiis, nemo animi quae earum, voluptatum dicta fugit aliquam quasi, ipsam magnam labore reiciendis architecto deleniti sint laudantium autem. Voluptatum tempora veritatis incidunt eaque eligendi nisi doloribus!
            Sit, ad? Molestiae totam similique obcaecati nemo quas ad mollitia nihil? Aliquid saepe, sequi tempora facilis ab dolores autem a veniam accusamus blanditiis perferendis nisi dolorem culpa repellendus voluptates rerum!
            Fugiat quos harum, quod accusamus iusto deserunt voluptates. Totam quo architecto laudantium recusandae voluptatibus. Autem possimus eaque debitis tempore corporis veritatis nesciunt, odio dolor et, provident voluptatem architecto fugit ex.
            Enim sunt beatae eos dicta? Officiis ad perspiciatis illum animi! Quam itaque ea, blanditiis quasi laboriosam beatae, eaque perferendis pariatur ipsa optio animi consequatur totam veniam porro corporis, officia consequuntur!
            Dolorum voluptas rem quia magnam. Illo nam magnam, provident corrupti incidunt accusantium nisi libero consectetur perspiciatis, veritatis aspernatur suscipit, commodi atque tempore error repellendus voluptas animi aperiam voluptates. Eaque, sequi.
            Nesciunt exercitationem alias, delectus in architecto, iure libero eius explicabo quam aliquam quas eaque voluptas neque enim incidunt hic, necessitatibus sequi tempora veniam nam perferendis laboriosam quod magni? Consectetur, incidunt?
            Tempore quos saepe quo tempora ut itaque vitae commodi, id ex quam a suscipit consequatur laudantium ad consectetur accusamus! Dicta velit adipisci modi fuga iure saepe amet molestias earum sapiente.
            Doloribus harum ea impedit voluptates et in architecto minus rem fuga dolore optio odio corrupti accusantium eaque dolorem excepturi reprehenderit minima amet corporis molestiae saepe dolorum labore, consectetur ut! Harum.
            Dicta totam quisquam iste maxime, rerum accusamus sapiente architecto error molestiae asperiores veniam voluptatem illo officiis non dolorum nesciunt culpa nulla aperiam inventore. Esse, provident. Ullam in itaque rem numquam?
            Repellendus, voluptatum dolore debitis in eligendi, et voluptatibus eveniet nemo excepturi aliquid cupiditate ullam illum est repudiandae sequi laudantium! Similique doloremque sit molestias! Totam amet inventore ex fuga, omnis est.
            Ipsa sed aspernatur non sunt, eligendi alias corrupti exercitationem, architecto earum nobis rem error? Nam nobis saepe, dolorum debitis hic distinctio nulla iste error alias officia ad quae at neque!
            Repudiandae dolores assumenda a praesentium ducimus, nesciunt nam minima doloribus qui repellat enim totam distinctio iste voluptatum consectetur quae ex ea, perferendis officiis recusandae voluptate ipsa voluptatibus et? Eos, ut?
            Nisi, pariatur ab culpa amet autem laborum hic et rem ad mollitia consequatur blanditiis, dolores reprehenderit eligendi sint officia aliquam delectus odio aut. Ipsam officiis nulla reprehenderit, accusantium ex ducimus!
            Itaque assumenda blanditiis minima odit perferendis repellendus doloribus nemo unde iure numquam, quos ipsa commodi deleniti libero consequatur nisi, fugiat rerum sequi error illo facilis necessitatibus. Rem nihil delectus cupiditate.
            Reprehenderit placeat itaque cum dolore illum fugiat ullam dolorem eum officia, veniam et laudantium doloribus in vitae ipsa commodi quisquam fugit quaerat! Vero, iure natus quis et corrupti unde saepe.
            Quod, ipsum architecto? Nobis veritatis pariatur nemo alias libero magni at! Accusantium dolores sed quae fuga ut incidunt, et dolor voluptatum quia ea repellat voluptate cum est, repellendus, neque saepe.
            Libero, porro perspiciatis! Adipisci eum placeat ullam ut aliquam reiciendis, molestiae rem provident omnis ad vero beatae mollitia labore aperiam iure quo rerum veniam libero eos doloribus alias nemo enim.
            Alias perferendis et incidunt dolores omnis laborum excepturi, doloremque, voluptatum debitis, architecto neque enim. Repudiandae, quis non? Eum iste quod numquam molestias, sequi hic voluptate voluptatem officia, fuga corporis odit!
            Vel, eligendi. Rem voluptates reprehenderit, voluptatibus aut eaque nostrum aperiam sed? Culpa iure ducimus cupiditate consectetur, tempore, veritatis cumque doloribus ea fuga laboriosam earum itaque optio? Quaerat deserunt in consequatur.
            Omnis ipsum quia, natus nostrum fugiat, temporibus iure nisi blanditiis totam error soluta officiis unde nihil reprehenderit aliquid. Velit quis molestias, cum illum nam rem magnam explicabo eius quas dolore?
            Minus ex repellendus voluptatum. Blanditiis, fuga? Sequi, ullam repellat veniam omnis asperiores quidem, sunt nostrum voluptate qui nobis totam non natus dicta magnam earum blanditiis labore aut. Quam, quisquam eum!
            Corporis repellendus rem quod impedit maiores quasi? Ab doloribus, deserunt soluta culpa, blanditiis vel dignissimos quaerat ut pariatur, veniam quia illo! Sint expedita quam ea blanditiis, officiis rerum consequatur tempore.
            Vel nob Maxime obcaecati asperiores, necessitatibus dolores atque enim corrupti quae labore nemo est cupiditate! Minima modi perspiciatis magni sit consectetur, culpa non odio, deserunt soluta ullam eum reiciendis aliquid vitae hic.
            Sint dignissimos illum cupiditate veniam voluptate labore saepe optio est. Eaque voluptatibus reprehenderit ad qui debitis dolore accusantium modi nihil, nemo non accusamus inventore earum consequuntur ullam a. Nobis, unde.</div>
        </article> 
    </div>
  )
}

export default BlogDetailPage