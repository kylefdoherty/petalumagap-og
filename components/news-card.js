import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap'

const NewsCard = ({ title, excerpt, publication, pubDate, img, url }) =>
  <div className="news-card">
    <a href={url} target="_blank">
      <Card>
        <CardImg
          style={{ height: '180px', width: '318px' }}
          height="180"
          width="318"
          src={img.url}
          alt={img.altText}
        />
        <CardBody style={{ marginTop: '5px' }}>
          <CardTitle
            style={{ fontSize: '18px', fontWeight: '600', lineHeight: '21px', fontFamily: 'Montserrat' }}
            className="news-card__title"
          >
            {title}
          </CardTitle>
          <CardText style={{ color: 'black' }}>
            {excerpt}
          </CardText>
          <CardText>
            <small
              style={{ paddingRight: '1em', borderRight: '1px solid', fontWeight: '600' }}
              className="text-muted"
            >
              {publication}
            </small>
            <small
              style={{ paddingLeft: '1em' }}
              className="text-muted"
            >
              {pubDate}
            </small>
          </CardText>
        </CardBody>
      </Card>
    </a>
    <style jsx>{`
      .news-card {
        width: 30%;
        margin-bottom: 30px;
        text-align: center;
        background: white;
        padding: 20px;
        padding-bottom: 0;
        border-radius: 5px;
        border-bottom: 5px solid black;

      }

      @media (max-width: 992px) {
        .news-card {
          width: 45%;
        }
      }

      @media (max-width: 768px) {
        .news-card {
          width: 90%;
        }
      }

      .news-card__title {
        font-size: 18px !imporrant;
        font-weight: 600 !imporrant;
        line-height: 21px !imporrant;
        font-weight: 600 !important;
        text-transform: capitalize;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
      }
    `}</style>
  </div>

export default NewsCard
