import React from 'react'

export const Filter = () => {
	return (
		<section className='filter'>
			<form>
				<input type='text' name='search' placeholder='Nombre del Artículo' />
				<button type='submit'>Buscar</button>
			</form>

		</section>
	)
}
