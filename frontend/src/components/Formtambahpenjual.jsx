import React from 'react'

const Formtambahpenjual = () => {
  return (
    <div>
    <h1 className='title'>Penjual</h1>
    <h2 className='subtitle'>Tambah Penjual</h2>
    <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">
                <form>
                <div className='field'>
                    <label className='label'>Nama Depan</label>
                    <div className='control'>
                        <input type='text' className='input' placeholder='Nama depan' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Nama Belakang</label>
                    <div className='control'>
                        <input type='text' className='input' placeholder='Nama belakang' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Email</label>
                    <div className='control'>
                        <input type='text' className='input' placeholder='Email' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Password</label>
                    <div className='control'>
                        <input 
                        type='password' 
                        className='input' 
                        placeholder='*****' 
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Confirm Password</label>
                    <div className='control'>
                        <input 
                        type='password' 
                        className='input' 
                        placeholder='*****' 
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Role</label>
                    <div className='control'>
                        <div className="select is-fullwidth">
                            <select>
                                <option value="admin">Admin</option>
                                <option value="penjual">Penjual</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='field'>
                    <div className="control">
                        <button className='button is-success'>
                            Simpan
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Formtambahpenjual