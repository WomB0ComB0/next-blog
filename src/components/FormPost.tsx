'use client'
import { FormInputPost } from '@/types'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>()
  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-5 mt-10'>
      <input type="text"  {...register('title', { required: true })} placeholder={`post title....`} className="input input-bordered w-full max-w-lg" />
      <textarea className="textarea textarea-bordered w-full max-w-lg" {...register('content', { required: true })} placeholder={`Post content...`}></textarea>

      <select className="select select-bordered w-full max-w-lg" {...register('tag', { required: true })} defaultValue={``}>
        <option disabled selected>Select tags</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <button type='submit' className='btn btn-primary w-full max-w-lg'>
        {isEditing ? 'Update' : 'Create'}
      </button>
    </form>
  )
}

export default FormPost
