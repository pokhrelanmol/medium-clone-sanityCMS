export interface Post {
  _id: string
  _createdAt: string
  description: string
  title: string
  slug: { current: string }
  author: { name: string; image: string }
  mainImage: {
    assests: {
      url: string
    }
  }
  body: [object]
}
