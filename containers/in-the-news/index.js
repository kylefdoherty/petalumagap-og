import NewsCard from '../../components/news-card'
import SectionHeader from '../../components/section-header'
import { featuredNews } from './data'

const inTheNewsStyles = {
  display: 'flex',
  background: 'rgba(249,249,249,0.95)',
  justifyContent: 'space-around',
  paddingTop: '50px',
  paddingBottom: '100px !important',
  flexWrap: 'wrap',
}

const InTheNews = () =>
  <section style={inTheNewsStyles} className="in-the-news tg-haslayout tg-paddingbottomzero">
    <SectionHeader
      mainText="In the News"
      subText=""
    />
    {
      featuredNews.map(article => {
        return(
          <NewsCard
            key={article.title}
            title={article.title}
            excerpt={article.excerpt}
            publication={article.publication}
            pubDate={article.pubDate}
            img={article.img}
            url={article.url}
          />
        )
      })
    }
  </section>

export default InTheNews
