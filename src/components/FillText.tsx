import '../css/components/fill-text.css'

export function FillText({ text, className }: { text: string, className: string }) {
    return (
         
<h2 className={`container-fill-text ${className}`}>
  <span className="container-fill-text__container">
    <span className="container-fill-text__display">{text}</span>
  </span>
  <span className="container-fill-text__reference" aria-hidden="true">{text}</span>
</h2>

    );
}