import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Flashcard = () => {
  return (
     <Card sx={{ maxWidth: 345 }}>

      <Typography variant="subtitle1" sx={{ color: "text.secondary", p: 1, fontWeight:700 }}>
        Deal of the Day
      </Typography>

      <CardContent className="flex justify-between">

        <Box className="text-md font-semibold flex flex-col items-center text-gray-400">
          12
          <Typography variant="subtitle2">Hour</Typography>
        </Box>

        <Box className="text-md font-semibold flex flex-col items-center text-gray-400">
          12
          <Typography variant="subtitle2">Minute</Typography>
        </Box>

        <Box className="text-md font-semibold flex flex-col items-center text-gray-400">
          12
          <Typography variant="subtitle2">Second</Typography>
        </Box>

      </CardContent>

      <CardMedia
        component="img"
        height="200"
        image="/mid.png"
        alt="bag"
      />

      <CardContent>

        <Typography gutterBottom variant="subtitle1" sx={{ color: "#000",  fontWeight:700 }}>
          Tonny Black
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Shoulder bag-White-Plain
        </Typography>

        <Box className="flex justify-between text-sm items-center mt-2">

          <div className="text-red-700 font-semibold">
            $69.99
          </div>

          <div className="line-through text-gray-400">
            $129.99
          </div>

          <div className="bg-red-700 text-white rounded px-2 py-0.5">
            -40%
          </div>

        </Box>

      </CardContent>

    </Card>
  )
}

export default Flashcard