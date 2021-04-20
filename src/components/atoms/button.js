export default function Button({label, onClick}) {
  return <button role="button" onClick={onClick}>{label}</button>
}