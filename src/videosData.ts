export interface Video {
    url: string;
    description: string;
    rating: number;
    playtime: string;
  }
  
  export const videos: Video[] = [
    {
      url: "https://www.youtube.com/watch?v=0aGm_9Qf3j8",
      description: "First Video Description",
      rating: 9,
      playtime: "12:34"
    },
    {
      url: "https://www.youtube.com/watch?v=n9d9xuVs3ws",
      description: "Second Video Description",
      rating: 8,
      playtime: "45:67"
    }
  ];
  