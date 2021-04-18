import BannerImage from '../molecules/banner-image'

export default function IndexContent({ content, children }) {
  return <BannerImage
    height="500px"
    src="/pano.webp"
    title="Welcome to RAIJ"
    subtitle="Make Lists. Soothe the Rage." />
}
