import BannerImage from '../molecules/banner-image'

export default function IndexContent({ content, children }) {
  return <div className="organism">
      <BannerImage
        height="500px"
        src="/pano.webp"
        title="Welcome to RAIJ"
        subtitle="Make Lists. Soothe the Rage." />
      <h3>This would be some homepage content!</h3>
    </div>
}
