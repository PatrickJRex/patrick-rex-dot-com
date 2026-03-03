import '../css/components/gradient.css'

export function Gradient() {
    return (
        <div className="gradient-wrapper">
            <div className="gradient-blob-overlay"></div>
            <div className="gradient-blob-wrapper">
            <div className="gradient-blob"></div>
            </div>
            <div className="gradient-blob-wrapper">
            <div className="gradient-blob gradient-blob-2"></div>
            </div>
        </div>
    );
}