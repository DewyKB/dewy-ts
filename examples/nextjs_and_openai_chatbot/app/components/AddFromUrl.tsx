import React, { useState, FormEvent } from 'react';

export default function AddFromUrl(props) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    await fetch('/api/documents', {
      method: 'POST',
      body: formData,
    })
  }
 
  return (
    <form onSubmit={onSubmit} {...props}>
      <input type="text" name="url" placeholder="URL to load..."/>
      <button type="submit">Load</button>
    </form>
  )
}