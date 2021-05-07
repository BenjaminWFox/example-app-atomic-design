import BannerImage from '../molecules/banner-image'

export default function ProfileContent() {
  return <div className="organism">
      <BannerImage
        height="300px"
        src="/bird.webp"
        title="Profile"
      />
      <h3>This would be some profile content...</h3>
    </div>
}