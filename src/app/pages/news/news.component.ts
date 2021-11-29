import { Component, OnInit } from '@angular/core';

interface NewsItem {
  title: string,
  text: Array<string>,
  thumbnailUrl: string,
  imageUrl: string,
  linkUrl: string,
  linkText: string
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  news: Array<NewsItem> = [
    {
      title: 'Lorem',
      text: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, et.',
        'Lorem, ipsum dolor?'
      ],
      thumbnailUrl: 'https://via.placeholder.com/300x150?text=Placeholder',
      imageUrl: 'https://via.placeholder.com/1920x1080?text=Placeholder',
      linkUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      linkText: 'Learn More'
    },
    {
      title: 'Lorem',
      text: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, et.',
        'Lorem, ipsum dolor?'
      ],
      thumbnailUrl: 'https://via.placeholder.com/300x150?text=Placeholder',
      imageUrl: 'https://via.placeholder.com/1920x1080?text=Placeholder',
      linkUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      linkText: 'Learn More'
    },
    {
      title: 'Lorem',
      text: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, et.',
        'Lorem, ipsum dolor?'
      ],
      thumbnailUrl: 'https://via.placeholder.com/300x150?text=Placeholder',
      imageUrl: 'https://via.placeholder.com/1920x1080?text=Placeholder',
      linkUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      linkText: 'Learn More'
    },
    {
      title: 'Lorem',
      text: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, et.',
        'Lorem, ipsum dolor?'
      ],
      thumbnailUrl: 'https://via.placeholder.com/300x150?text=Placeholder',
      imageUrl: 'https://via.placeholder.com/1920x1080?text=Placeholder',
      linkUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      linkText: 'Learn More'
    }
  ];
  constructor() { }
  ngOnInit(): void {}
}
