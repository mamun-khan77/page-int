import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFound() {
  const stamps = Array.from({ length: 20 });
  const walls = Array.from({ length: 6 });

  return (
    <>
      <SEO
        title="404 Page Not Found | PAGE International Ltd."
        description="The page you are looking for could not be found."
        path="/404"
      />

      <style>{`
        .not-found-shell {
          background: #000;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          overflow: hidden;
          font-family: 'Anton', sans-serif;
        }

        .not-found-scene {
          position: relative;
          width: min(100%, 1200px);
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          background: #000;
        }

        .not-found-scene div {
          transform-style: preserve-3d;
        }

        .not-found-rail {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotateX(-30deg) rotateY(-30deg);
          pointer-events: none;
        }

        .not-found-stamp {
          position: absolute;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(20, 20, 20, 1);
          color: #ff1205;
          font-size: 7rem;
          font-weight: 900;
          letter-spacing: -0.08em;
          line-height: 1;
          transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px) translateY(130px);
          animation: stampSlide 20s linear infinite;
          animation-delay: calc(var(--i) * -2s - 300ms);
          opacity: 0.98;
        }

        .not-found-world {
          position: relative;
          width: 200px;
          height: 200px;
          transform: rotateX(-30deg) rotateY(-30deg);
        }

        .not-found-forward {
          position: absolute;
          inset: 0;
          animation: slide 2s linear infinite;
        }

        .not-found-box {
          position: relative;
          width: 200px;
          height: 200px;
          transform-origin: 100% 100%;
          animation: roll 2s cubic-bezier(1, 0.01, 1, 1) infinite;
        }

        .not-found-wall {
          position: absolute;
          width: 200px;
          height: 200px;
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(250, 250, 250, 1);
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 7rem;
          font-weight: 900;
          overflow: hidden;
        }

        .not-found-wall:nth-child(1) { transform: translateZ(100px); }
        .not-found-wall:nth-child(2) { transform: rotateX(180deg) translateZ(100px); }
        .not-found-wall:nth-child(3) { transform: rotateX(90deg) translateZ(100px); }
        .not-found-wall:nth-child(4) { transform: rotateX(-90deg) translateZ(100px); }
        .not-found-wall:nth-child(5) { transform: rotateY(90deg) translateZ(100px); }
        .not-found-wall:nth-child(6) { transform: rotateY(-90deg) translateZ(100px); }

        .not-found-wall::before {
          content: '4';
          display: block;
          transform: rotateX(180deg);
        }

        .not-found-wall:nth-child(3)::before,
        .not-found-wall:nth-child(4)::before {
          transform: rotateX(180deg) rotateZ(90deg);
          animation: zeroFour 4s linear infinite;
        }

        .not-found-wall:nth-child(5)::before,
        .not-found-wall:nth-child(6)::before {
          transform: rotateX(180deg) rotateZ(180deg);
          animation: zeroFour 4s linear infinite;
        }

        .not-found-copy {
          position: relative;
          z-index: 2;
          margin-top: 1.5rem;
          text-align: center;
          color: #fff;
        }

        .not-found-copy h1 {
          margin: 0;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.95;
          letter-spacing: -0.06em;
          color: #ff1205;
          text-shadow: 0 0 25px rgba(255, 18, 5, 0.32);
        }

        .not-found-copy h2 {
          margin: 1rem 0 0.75rem;
          font-size: clamp(1.2rem, 3vw, 2.25rem);
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #fff;
        }

        .not-found-copy p {
          margin: 0 auto;
          max-width: 640px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
        }

        .not-found-actions {
          margin-top: 2rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
        }

        .not-found-actions a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.35rem;
          border-radius: 9999px;
          font-weight: 700;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .not-found-actions a:hover {
          transform: translateY(-1px);
        }

        .not-found-primary {
          background: #ff1205;
          color: #fff;
        }

        .not-found-secondary {
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          background: rgba(255, 255, 255, 0.02);
        }

        @keyframes stampSlide {
          0% {
            transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px) translateY(130px);
          }
          100% {
            transform: rotateX(90deg) rotateZ(-90deg) translateZ(-200px) translateY(-380px);
          }
        }

        @keyframes zeroFour {
          0% {
            content: '4';
          }
          100% {
            content: '0';
          }
        }

        @keyframes roll {
          0% { transform: rotateZ(0deg); }
          85% { transform: rotateZ(90deg); }
          87% { transform: rotateZ(88deg); }
          90% { transform: rotateZ(90deg); }
          100% { transform: rotateZ(90deg); }
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200px); }
        }

        @media (max-width: 640px) {
          .not-found-scene {
            height: 290px;
          }

          .not-found-stamp {
            width: 160px;
            height: 160px;
            font-size: 5rem;
          }

          .not-found-world,
          .not-found-box,
          .not-found-wall {
            width: 160px;
            height: 160px;
          }

          .not-found-wall:nth-child(1) { transform: translateZ(80px); }
          .not-found-wall:nth-child(2) { transform: rotateX(180deg) translateZ(80px); }
          .not-found-wall:nth-child(3) { transform: rotateX(90deg) translateZ(80px); }
          .not-found-wall:nth-child(4) { transform: rotateX(-90deg) translateZ(80px); }
          .not-found-wall:nth-child(5) { transform: rotateY(90deg) translateZ(80px); }
          .not-found-wall:nth-child(6) { transform: rotateY(-90deg) translateZ(80px); }
        }
      `}</style>

      <section className="not-found-shell">
        <div className="container-page">
          <div className="not-found-scene">
            <div className="not-found-rail" aria-hidden="true">
              {stamps.map((_, index) => (
                <div
                  key={index}
                  className="not-found-stamp"
                  style={{ ['--i' as any]: index + 1 }}
                >
                  {index % 2 === 0 ? '4' : '0'}
                </div>
              ))}
            </div>

            <div className="not-found-world" aria-hidden="true">
              <div className="not-found-forward">
                <div className="not-found-box">
                  {walls.map((_, index) => (
                    <div key={index} className="not-found-wall" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="not-found-copy">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
              The page you are looking for doesn&rsquo;t exist or has been moved. Let&rsquo;s get you
              back on track.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="not-found-primary">
                <Home className="h-4 w-4" aria-hidden="true" />
                Go Home
              </Link>
              <Link to="/garage-equipment" className="not-found-secondary">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
