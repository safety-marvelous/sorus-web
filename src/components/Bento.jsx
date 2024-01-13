
import './Bento.css';

function Bento() {
    return (
        <div className="bento-grid">
            <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">Telegram</a>

            <img src="2.png" alt="Image 1" />
            <img src="3.png" alt="Image 2" />
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            <img src="4.png" alt="Image 3" />
            <img src="5.png" alt="Image 4" />

        </div>

    
    );
}


// function Bento() {
//     const images = [
//         '2.png', // Replace with your image URLs
//         '3.png',
//         '4.png',
//         '5.png',
//     ];

//     return (
//         <div className="grid">
//             {images.map((image, i) => (
//                 <div
//                     key={i}
//                     className={`grid-item ${i === 3 || i === 6 ? "col-span-2" : ""}`}
//                     style={{backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundPosition: 'center'}}
//                 ></div>
//             ))}
//         </div>
//     );
// }

export default Bento;