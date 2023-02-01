export default function Toast({}) {
  return (
    <div
      id='liveToast'
      className='toast align-items-center text-white border-0'
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
      style={{ maxWidth: '10%', backgroundColor: '#5cb85c' }}
    >
      <div className='d-flex justify-content-center'>
        <div className='toast-body'>NOW IN GAME</div>
      </div>
    </div>
  );
}
