import DirectoryItem from './DirectoryItem';
import { Container, Row } from 'react-bootstrap'

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: 'Hip-Hop',
      imgsrc: 'https://i.discogs.com/ZIL05hcZo0Rkz8qMahZSNscLc_uRi5m1Hyiys_SDTtg/rs:fit/g:sm/q:90/h:490/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5MjYw/NC0xMTc3MDE5MjI4/LmpwZWc.jpeg',  
      route: 'shop/hip-hop'
    },
    {
      id: 2,
      title: 'Jazz',
      imgsrc: 'https://m.media-amazon.com/images/I/91bA8lgsSbS._AC_SL1500_.jpg',
      route: 'shop/jazz'
    },
    {
      id: 3,
      title: 'Soul',
      imgsrc: 'https://i.discogs.com/fBe31DlFBl5CiCi80gHcbEFHHVxam_qA4pT30_23PeM/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NTkw/NDAtMTMxMTA0Mjg2/MS5qcGVn.jpeg',
      route: 'shop/soul'
    },
    {
      id: 4,
      title: 'Rock',
      imgsrc: 'https://i.discogs.com/3edspNWdBo9DHyR4Xhpfw044ZDeOnnj2qgO3NlzcYO8/rs:fit/g:sm/q:90/h:576/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzEw/NC0xMzQ4MDgyMzA2/LTEyODAuanBlZw.jpeg',
      route: 'shop/rock'
    },
    {
      id: 5,
      title: 'Electronic',
      imgsrc: 'https://www.udiscovermusic.com/wp-content/uploads/2017/04/Chemical-Brothers-Dig-Your-Own-Hole-Album-Cover-Web-Optimised-820.jpg',
      route: 'shop/electronic'
    },
    {
      id: 6,
      title: 'Folk',
      imgsrc: 'https://m.media-amazon.com/images/I/810+gKHBoXL._AC_SX466_.jpg',
      route: 'shop/folk'
    },
  ];
  return (
    <Container>
      <Row sm={2} md={3} lg={4} className="d-flex justify-content-around">
      {categories.map(( category ) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </Row>
    </Container>
  )
}

export default Directory