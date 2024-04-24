import logoImg from '../assets/quiz-logo.png';

export default function Header() {
    return ( // () agar terbaca
    <header>
        <img src={logoImg} />
        <h1>Quiz App</h1>
    </header>
    );
}