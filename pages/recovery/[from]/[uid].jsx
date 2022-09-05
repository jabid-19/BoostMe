import React from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { resendMail } from '../../../src/backend/Auth'

const Recovery = () => {
  const router = useRouter()

  const resend = async () => {
    const { from, uid } = router.query
    // console.log('resend from ', from, uid)
    const response = await resendMail(from, uid)
    if (response.status == 200 || response.status == 201) {
      console.log(response.data)
    } else {
      console.log('error')
    }
  }
  return (
    <div
      style={{
        position: 'relative',
        height: '90vh',
        backgroundColor: '#ffffff',
        opacity: '1',
        backgroundImage: 'radial-gradient(#fcaf45 2px, #ffffff 2px)',
        backgroundSize: '40px 40px',
        overflow: 'hidden',
      }}>
      <div
        style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '30px',
            border: '2px solid #e1306c',
          }}>
          <h1
            style={{ color: '#e1306c', fontSize: '2rem', fontWeight: '600', marginBottom: '8px' }}>
            Recovery email sent
          </h1>
          <p style={{ color: '#5e3905' }}>
            Kindly check your email within 60 minutes to reset your password. If not in inbox,
            please check spam folder.
          </p>
          <button
            style={{
              display: 'block',
              width: '100%',
              margin: '10px 0',
              background: '#e1306c',
              color: 'white',
              border: 0,
              padding: '10px 20px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
            onClick={resend}>
            Resend Email
          </button>
          <button
            style={{
              display: 'block',
              width: '100%',
              margin: '10px 0',
              background: '#e1306c',
              color: 'white',
              border: 0,
              padding: '10px 20px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
            onClick={(e) => Router.push('/login')}>
            Back to login
          </button>
          <br />
          <a href="" style={{ textDecoration: 'none' }}>
            Contact support
          </a>
        </div>
      </div>
    </div>
  )
}

export default Recovery
