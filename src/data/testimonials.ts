export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  photo: string;
}

export const testimonials: Testimonial[] = [
  { 
    id: "lietson", 
    author: "Lietson Dos Santos", 
    role: "Front-end Developer | React & Node.js", 
    rating: 5, 
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQFgH9NnpHj1UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728607241113?e=1776297600&v=beta&t=HbClBdaq1NsbVgF5vbq1eJojoNuG6zsjUzQOv3dslps" 
  },
  { 
    id: "adao", 
    author: "Adão Magalhães", 
    role: "Frontend Developer | ReactJS | TailwindCSS", 
    rating: 5, 
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQHCqPaZF9gduQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1686138368450?e=1776297600&v=beta&t=rWFxyeSA04F_ZYsXC1It4_Y9C52XI-CLczQMt3CpeSU" 
  },
  { 
    id: "edmilson", 
    author: "Edmilson José Silvério", 
    role: "Backend Engineer | Node.js | AWS", 
    rating: 5, 
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQFtxgpFnI6cJQ/profile-displayphoto-shrink_200_200/B4DZZVVQEMHIAY-/0/1745188357263?e=1776297600&v=beta&t=jdAZe2DcAFguS7E4EWxz_7ByWJqHAoKJ_hB8MctY7g4" 
  },
];
