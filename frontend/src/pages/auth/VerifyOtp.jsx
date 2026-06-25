import React, { useState, useEffect } from 'react';
import '../../assets/styles/VerifyOtp.css';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(120);
  const [isExpired, setIsExpired] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setIsExpired(true);
          setCanResend(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        if (prevInput) prevInput.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newOtp = pastedData.split('').concat(Array(6 - pastedData.length).fill(''));
    setOtp(newOtp);
    setError('');
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');

    if (otpValue.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        alert('OTP verified successfully!');
        setOtp(['', '', '', '', '', '']);
        setSuccess(false);
      }, 2000);
    }, 2000);
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    setError('');
    setIsExpired(false);
    setCanResend(false);
    setTimer(120);
    alert('OTP resent to your phone/email');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="verify-otp-container">
      <div className="verify-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>

      <div className="verify-wrapper">
        <div className="verify-card">
          {success ? (
            <div className="success-state">
              <div className="success-icon">
                <span>✓</span>
              </div>
              <h2>Verified Successfully</h2>
              <p>Your account has been verified</p>
            </div>
          ) : (
            <>
              <div className="verify-header">
                <h1 className="verify-title">Enter OTP</h1>
                <p className="verify-subtitle">
                  Enter the 6-digit code sent to your phone
                </p>
              </div>

              <form onSubmit={handleVerify} className="verify-form">
                <div className="otp-container">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : null}
                      className={`otp-input ${
                        digit ? 'filled' : ''
                      } ${error ? 'error' : ''} ${
                        success ? 'success' : ''
                      }`}
                      disabled={loading || success}
                      aria-label={`OTP digit ${index + 1}`}
                    />
                  ))}
                </div>

                {error && (
                  <div className="error-message">
                    <span className="error-icon">⚠️</span>
                    {error}
                  </div>
                )}

                <div className="timer-section">
                  <p className="timer-text">
                    Code expires in:
                    <span className={`timer ${isExpired ? 'expired' : ''}`}>
                      {formatTime(timer)}
                    </span>
                  </p>
                  {isExpired && (
                    <p className="expired-message">Code has expired</p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`verify-button ${loading ? 'loading' : ''}`}
                  disabled={loading || otp.join('').length !== 6}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Verifying...
                    </>
                  ) : (
                    'Verify OTP'
                  )}
                </button>
              </form>

              <div className="otp-footer">
                {canResend ? (
                  <button
                    type="button"
                    className="resend-button"
                    onClick={handleResend}
                  >
                    Resend Code
                  </button>
                ) : (
                  <p className="resend-text">
                    Didn't receive the code? <span>Resend available in {formatTime(timer)}</span>
                  </p>
                )}
              </div>

              <p className="verify-support">
                Having trouble? <a href="#">Contact support</a>
              </p>
            </>
          )}
        </div>

        <div className="verify-illustration">
          <div className="illustration-content">
            <div className="illustration-icon">📱</div>
            <h2>Secure Verification</h2>
            <p>We've sent a secure one-time password to protect your account</p>
            <div className="security-badge">
              <span>🔒</span> Your data is secure
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
