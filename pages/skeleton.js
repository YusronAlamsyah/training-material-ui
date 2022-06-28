import { useEffect, useState } from "react"
import Skeleton from '@material-ui/lab/Skeleton'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import SkeletonList from "../components/SkeletonList"

function TestSkeleton() {
  const [listCat, setCat] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => res.json())
      .then((data) => {
        setCat(data.categories)
        setLoading(false)
      })
  }, [])

  if (isLoading) return  <SkeletonList />
  if (!listCat) return <p>No profile data</p>

  console.log("listCat",listCat);
  
  return (

    <Container fixed>
      <Box className='mt-3'>
        <Grid container spacing={3}>
        {
            listCat.map((value, key) => (
          <Grid key={key} item md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  image={value.strCategoryThumb}
                  title={value.strCategory}
                  style={{ height: "250px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {value.strCategory}
                  </Typography>
                  <div style={{ minHeight: "300px" }}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {value.strCategoryDescription}
                  </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
        }
        </Grid>
      </Box>
    </Container>
  )
}

export default TestSkeleton