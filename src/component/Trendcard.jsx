import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Trendcard = () => {
  return (
     <Card sx={{ maxWidth: 400 }}>

      <CardMedia
        component="img"
        height="400"
        image="/trend.jpg"
        alt="trend"
      />

      <CardContent className="bg-neutral-900 px-4 py-3 flex justify-between items-center">

        <Box sx={{ textAlign:'left'}}>

          <Typography
            variant="h6"
            sx={{ color: "#fff", fontSize: "18px", fontWeight: 700, }}
          >
            Cool & Sexy Calvin Klein
          </Typography>

          <Typography variant="body2" className="text-gray-400">
            Dotted dress-Casual
          </Typography>

        </Box>

        <Button variant="outlined" sx={{color:'#E2DFDF', borderColor:'#C4C4C4'}} >
          $89 <span className="ml-1 ">Shop Now</span>
        </Button>

      </CardContent>

    </Card>
  )
}

export default Trendcard