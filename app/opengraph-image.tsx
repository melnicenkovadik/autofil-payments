import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Autofill Pro - AI-Powered Form Autofill';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0f172a',
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Background Elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        left: '-100px',
                        width: '400px',
                        height: '400px',
                        background: 'rgba(168, 85, 247, 0.2)',
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        background: 'rgba(236, 72, 153, 0.2)',
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                    }}
                >
                    {/* Icon/Logo Placeholder */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                            marginBottom: '40px',
                            boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
                        }}
                    >
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>

                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            background: 'linear-gradient(to right, #e2e8f0, #ffffff)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: '20px',
                            letterSpacing: '-0.02em',
                            textAlign: 'center',
                        }}
                    >
                        Autofill Pro
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            color: '#94a3b8',
                            textAlign: 'center',
                            maxWidth: '800px',
                            lineHeight: 1.4,
                        }}
                    >
                        AI-Powered Form Autofill for Chrome
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            marginTop: '40px',
                            padding: '12px 24px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '100px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            alignItems: 'center',
                            gap: '12px',
                        }}
                    >
                        <div style={{ color: '#e2e8f0', fontSize: 24, fontWeight: 600 }}>
                            Lifetime Access
                        </div>
                        <div
                            style={{
                                width: '1px',
                                height: '20px',
                                background: 'rgba(255, 255, 255, 0.2)',
                            }}
                        />
                        <div style={{ color: '#a855f7', fontSize: 24, fontWeight: 700 }}>
                            $2
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
