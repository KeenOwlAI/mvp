function App() {
	return (
		<div className="min-h-screen flex flex-col text-white">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">

				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Soon come...</h2>
				<br></br>
				<br></br>
				<br></br>
				<form
					action="https://www.getrevue.co/profile/tyler_potts_/add_subscriber" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your email address..."
							type="email"
							name="member[email]"
							id="member_email"
							className="ring-1 text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Stay tuned"
							name="member[subscribe]"
							id="member_submit"
							className="ring-1 md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>


				</form>
				<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">SudPrim</h1>
				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">In Bass We Trust</h2>
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Customized by Keen Owl</p>

					<div className="flex -mx-6">
						<a href="#" className="mx-3 hover:opacity-80 duration-150">About</a> |
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>

					</div>

				</div>
				<center><div className="opacity-75 italic">
					By leaving your email address, you consent to our <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">General Terms and Conditions</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
				</div></center>
			</footer>

		</div>	
	)
}

export default App
