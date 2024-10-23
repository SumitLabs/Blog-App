import React from 'react'
import './article.css'
import Poster from '/img/poster.png'
import Author from '/img/avatar.jpg'
export const Article = () => {
  return (
    <div className="article">
      <div className="inner_article_container">
        <div className="article_head">
          <div className="article_head_left">
            <img src={Author} alt="" width={50} height={50} />
            <div className="Auther_info">
              <h4>Ms. Author</h4>
              <p>Just Now</p>
            </div>
          </div>
          <div className="article_head_right">

          </div>
        </div>
        <div className="article_containt">
          <div className="article_title">
            <h2>This is An Article</h2>
          </div>
          <div className="poster">
            <img src={Poster} alt="" />
          </div>
          <div className="main_containt">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, totam. Vel blanditiis soluta rem fugit quos delectus, aliquid a nulla dolorem mollitia. Nobis porro nulla harum vitae sit odit laborum?
              Impedit magnam est possimus doloremque magni excepturi necessitatibus delectus, nemo beatae ullam corrupti esse libero, voluptatibus hic quod consequatur sunt exercitationem praesentium velit facilis. Omnis distinctio veritatis suscipit molestiae odit!
              Aliquam suscipit magni tempora rerum modi iste eum reprehenderit vel, error, facere quidem consequuntur. Magni ipsam, doloremque a illo fuga, quas deleniti eaque temporibus nam ea pariatur. Optio, velit veritatis.
              Eaque distinctio quo provident odit, omnis quasi, nemo culpa voluptates alias laboriosam impedit blanditiis sit eum dignissimos corrupti magnam sunt doloribus ipsa eligendi odio quibusdam incidunt. Quod veniam debitis atque?
              Temporibus quas magnam error, adipisci excepturi, doloribus fugiat quisquam sint soluta, obcaecati nulla quod voluptatum id doloremque? Adipisci, veniam eveniet. Alias et quam ullam iure dolore quaerat nostrum fugit ipsum.
              Deleniti adipisci cupiditate praesentium, laborum eius eligendi nulla atque sunt tempore excepturi. Magni dolor autem quam cupiditate, corrupti est. Architecto natus saepe consequatur impedit qui quisquam! Consectetur atque nihil et?
              Fugiat veniam omnis reprehenderit amet vel nostrum temporibus non voluptas facere placeat sint molestias quae eligendi nobis, culpa beatae perferendis quisquam. Iusto amet expedita voluptates ab voluptatem odit ducimus similique.
              Dolorem natus velit architecto iste eos reprehenderit autem illo cum neque ad quam assumenda aperiam quo quibusdam nobis, omnis dolores fuga doloremque ipsum impedit, est quos sed non. Corrupti, incidunt?
              Voluptates odio, ipsam itaque nisi aut, laboriosam vero, reprehenderit officiis debitis cum voluptatibus rerum. Obcaecati neque rerum eveniet quam, delectus excepturi accusapa consequuntur provident, delectus at id.
              Consequuntur tempora voluptatibus itaque veniam quia odit dolores magnam, cupiditate tempore quaerat quibusdam, veritatis fuga, vero cumque harum id in repellendus accusamus earum repudiandae minima? Qui porro soluta dolorem dignissimos?
              Ut porro libero explicabo perspiciatis provident cum culpa a odio, facilis fugiat facere dolor. Tenetur libero, reiciendis repellat odio nemo quibusdam id facilis inventore, voluptate commodi deleniti perferendis veniam nihil?
              Dolorum eius vel excepturi adipisci ducimus possimus id fuga quibusdam. Libero eveniet soluta odit similique quo ex deserunt iusto atque sapiente veniam non dolorem qui modi facere eius, at sed.
              Ut possimus modi consequatur repellat iusto tempore ullam cum nulla voluptatum, adipisci quasi itaque, expedita blanditiis, rem explicabo aspernatur nostrum ipsa fugit sint quas. Aliquam corrupti repellat fugit fuga reprehenderit.
              Facilis eum doloribus dicta ea minus delectus sapiente nulla voluptatum modi, odit magni velit, quos sequi voluptate laboriosam ad distinctio maxime repellendus architecto amet minima provident magnam, perspiciatis blanditiis! Ea.
              At laboriosam corrupti suscipit fugit mollitia alias dolore libero molestias ut veniam sint, omnis quis excepturi perferendis facere doloribus accusantium eius fugiat explicabo ex laborum voluptatibus aut. Soluta, ipsum facilis!
              Officia totam magni voluptatum amet asperiores quos reprehenderit quidem explicabo. Dolore maiores dignissimos quo repellat quos voluptatum consectetur, eos suscipit repudiandae quas eligendi fugiat possimus error. Culpa quos est aliquid?
              Minima provident, iusto mollitia minus neque fuga beatae ad adipisci suscipit quasi placeat, in sit nam exercitationem unde veritatis quae sint ipsam? Ullam itaque animqui quibusdam accusamus. Id, illum necessitatibus debitis a ullam cumque quas, libero voluptatem eius tempora ipsum, dolorum eveniet obcaecati perferendis excepturi inventore qui enim? Ullam, voluptas corrupti.
              Magni iste laborum, porro nam similique delectus quia aut adipisci in voluptatibus eveniet asperiores. Veniam excepturi aliquam repellendus quaerat ab voluptas commodi corrupti, ipsam pariatur quod mollitia quibusdam, quis officia!
              Laudantium iste aliquam natus itaque. Quo quibusdam corrupti veritatis necessitatibus iusto explicabo aut cumque commodi incidunt sint? Maxime ut perferendis quam quaerat ea illo! Placeat ipsum provident qui dicta accusamus?
              Praesentium est culpa, rem aut, modi consectetur quisquam ducimus sed repudiandae minus incidunt. At neque, dolore adipisci ut reprehenderit odio velit corporis fuga cumque eligendi, suscipit, omnis hic animi. Ipsa?
              Suscipit autem illo, quam accusamus natus expedita, voluptates neque velit recusandae eveniet consequuntur aperiam, commodi unde architecto consectetur aliquid dolores enim dolor magnam ipsa. Maiores ea explicabo molestias voluptatem laudantium.</p>
          </div>
          <div className="comment_container">
            <h2>comments</h2>
            <div className="comment">
              <form>
                <textarea name="comment"></textarea>
                <div className="comment_btns">
                  <button id='cancel_btn' type='reset'>Cancel</button>
                  <button id='publish_btn' type='submit'>Publish</button>
                </div>
              </form>
              <div className="commented">
                <div className="reader_info">
                  <img src={Author} alt="" width={50} height={50} />
                  <div className="reader_data">
                    <h4>Ms. Author</h4>
                    <p>Just Now</p>
                  </div>
                </div>
                <div className="message">
                  <p>nice blog containt wroted by you. best of luck</p>
                </div>
              </div>



              <div className="commented">
                <div className="reader_info">
                  <img src={Author} alt="" width={50} height={50} />
                  <div className="reader_data">
                    <h4>Ms. Author</h4>
                    <p>Just Now</p>
                  </div>
                </div>
                <div className="message">
                  <p>nice blog containt wroted by you. best of luck</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
