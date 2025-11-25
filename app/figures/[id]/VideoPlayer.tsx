import React from 'react';

interface VideoPlayerProps {
  videoId?: string | null; // C'est l'ID de la vidéo yt stocké dans la BDD (ex: MgApT3VHtZY)
}

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
  if (!videoId) {
    return null; 
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="relative w-full overflow-hidden rounded-lg aspect-video"> 
      <iframe
        className="absolute top-0 left-0 w-full h-full" 
        src={embedUrl}
        title="Démonstration Vidéo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}