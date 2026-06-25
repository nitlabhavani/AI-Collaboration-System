import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const validateEmail = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateCode = () => {
    const newErrors = {};
    if (!code) {
      newErrors.code = 'Verification code is required';
    } else if (code.length !== 6) {
      newErrors.code = 'Code must be 6 digits';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};
    if (!newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }
    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(2);
      }, 2000);
    }
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (validateCode()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 1500);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setStep(1);
          setEmail('');
          setCode('');
          setNewPassword('');
          setConfirmPassword('');
          setSuccess(false);
        }, 2000);
      }, 2000);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="forgot-wrapper">
        <div className="forgot-illustration">
          <div className="illustration-content">
            <div className="illustration-icon">
              <svg viewBox="0 0 100 100" className="shield-svg">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#43e97b" />
                    <stop offset="100%" stopColor="#38f9d7" />
                  </linearGradient>
                </defs>
                <path d="M50 10 L85 25 V50 C85 70 70 85 50 90 C30 85 15 70 15 50 V25 L50 10 Z" fill="url(#shieldGrad)" />
                <path d="M50 30 L65 40 V55 C65 65 58 72 50 75 C42 72 35 65 35 55 V40 L50 30 Z" fill="white" opacity="0.3" />
                <circle cx="50" cy="52" r="8" fill="white" />
              </svg>
            </div>
            <h2>Reset Password</h2>
            <p>Securely recover your account with our multi-step verification process</p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <span>Secure Verification</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Quick Recovery</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <span>Easy Process</span>
              </div>
            </div>
          </div>
        </div>

        <div className="forgot-card">
          {success ? (
            <div className="success-state">
              <div className="success-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="38" fill="url(#successGrad)" />
                  <path d="M25 40 L35 50 L55 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#43e97b" />
                      <stop offset="100%" stopColor="#38f9d7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2>Password Reset Successful</h2>
              <p>Your password has been updated successfully.</p>
              <p className="redirect-text">Redirecting to login...</p>
            </div>
          ) : (
            <>
              <div className="forgot-header">
                <div className="header-badge">Recovery</div>
                <h1 className="forgot-title">
                  {step === 1 && 'Reset Password'}
                  {step === 2 && 'Verify Code'}
                  {step === 3 && 'New Password'}
                </h1>
                <p className="forgot-subtitle">
                  {step === 1 && 'Enter your email to receive a verification code'}
                  {step === 2 && 'Enter the 6-digit code sent to your email'}
                  {step === 3 && 'Create a new secure password'}
                </p>
              </div>

              <div className="step-indicator">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>
                  <span>1</span>
                </div>
                <div className={`step-line ${step > 1 ? 'active' : ''}`}></div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>
                  <span>2</span>
                </div>
                <div className={`step-line ${step > 2 ? 'active' : ''}`}></div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>
                  <span>3</span>
                </div>
              </div>

              {/* Step 1: Email */}
              {step === 1 && (
                <form onSubmit={handleEmailSubmit} className="forgot-form">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({});
                      }}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <button
                    type="submit"
                    className={`forgot-button ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Sending Code...
                      </>
                    ) : (
                      <>
                        Send Code
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Step 2: Verification Code */}
              {step === 2 && (
                <form onSubmit={handleCodeSubmit} className="forgot-form">
                  <div className="form-group">
                    <label htmlFor="code" className="form-label">Verification Code</label>
                    <input
                      type="text"
                      id="code"
                      className={`form-input code-input ${errors.code ? 'input-error' : ''}`}
                      placeholder="000000"
                      maxLength="6"
                      value={code}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setCode(value);
                        if (errors.code) setErrors({});
                      }}
                    />
                    {errors.code && <span className="error-message">{errors.code}</span>}
                    <p className="resend-text">
                      Didn't receive the code? <a href="#" onClick={(e) => {
                        e.preventDefault();
                        alert('Code resent to ' + email);
                      }}>Resend</a>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className={`forgot-button ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Verifying...
                      </>
                    ) : (
                      <>
                        Verify Code
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="back-button"
                    onClick={() => {
                      setStep(1);
                      setCode('');
                      setErrors({});
                    }}
                  >
                    Back
                  </button>
                </form>
              )}

              {/* Step 3: New Password */}
              {step === 3 && (
                <form onSubmit={handlePasswordSubmit} className="forgot-form">
                  <div className="form-group">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="newPassword"
                        className={`form-input ${errors.newPassword ? 'input-error' : ''}`}
                        placeholder="••••••••"
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                          if (errors.newPassword) setErrors({ ...errors, newPassword: '' });
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                      >
                        {showPassword ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.newPassword && (
                      <span className="error-message">{errors.newPassword}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showConfirm ? 'text' : 'password'}
                        id="confirmPassword"
                        className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                      >
                        {showConfirm ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <span className="error-message">{errors.confirmPassword}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`forgot-button ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Updating Password...
                      </>
                    ) : (
                      <>
                        Reset Password
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="back-button"
                    onClick={() => {
                      setStep(2);
                      setNewPassword('');
                      setConfirmPassword('');
                      setErrors({});
                    }}
                  >
                    Back
                  </button>
                </form>
              )}

              <p className="forgot-footer">
                Remember your password? <Link to="/login" className="login-link">Sign in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
