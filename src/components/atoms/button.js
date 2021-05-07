export default function Button({label, onClick}) {
  return <button className="atom" role="button" onClick={onClick}>{label}</button>
}