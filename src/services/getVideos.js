export const getVideoTrailer = (videos) => {
  console.log(videos)
  // let trailers = [];
  // if(videos) {
  //   for (let i = 0; i < videos.length; i++) {
  //     if (videos[i].type === 'Trailer') {
  //       trailers.push(videos[i]);
  //     }
  //   }
  // } else {
  //   return;
  // }
  // return trailers;
}

export const getVideoTeaser = (videos) => {
  let teaser = [];

  if(videos) {
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].type === 'Teaser') {
        teaser.push(videos[i]);
      }
    }
  } else {
    return;
  }
  return teaser;
}

export const getVideoFeaturette = (videos) => {
  let featurette = [];

  if(videos) {
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].type === 'Featurette') {
        featurette.push(videos[i]);
      }
    }
  } else {
    return;
  }
  return featurette;
}

export const getVideoClip = (videos) => {
  let clip = [];

  if(videos) {
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].type === 'Clip') {
        clip.push(videos[i]);
      }
    }
  } else {
    return;
  }
  return clip;
}