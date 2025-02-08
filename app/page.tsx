export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold tracking-wide text-center">
        <span className="text-blue-400">Sound</span> for <span className="text-pink-400">You</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl">
        Замовляйте унікальні пісні для свят, розіграшів або подарунків близьким. Створіть незабутній музичний момент!
      </p>
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <a
          href="https://t.me/JuGGLer_L"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Замовити пісню
        </a>
      </div>

      {/* Секція варіантів пісень */}
      <div className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-blue-300 mb-6">Варіанти пісень</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Варіант 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">💖 Зізнання у коханні</h3>
            <p className="text-gray-300">Романтична пісня, яка передасть ваші почуття.</p>
            <p className="mt-2 text-pink-400 font-semibold">Ціна: договірна</p>
            <a
              href="https://t.me/JuGGLer_L"
              className="mt-4 inline-block px-6 py-3 bg-pink-500 text-white rounded-lg hover:scale-105 transition-transform"
            >
              Замовити
            </a>
          </div>

          {/* Варіант 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">🎂 Привітання з днем народження</h3>
            <p className="text-gray-300">Весела та святкова пісня для іменинника.</p>
            <p className="mt-2 text-pink-400 font-semibold">Ціна: договірна</p>
            <a
              href="https://t.me/JuGGLer_L"
              className="mt-4 inline-block px-6 py-3 bg-pink-500 text-white rounded-lg hover:scale-105 transition-transform"
            >
              Замовити
            </a>
          </div>

          {/* Варіант 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">😂 Жартівлива пісня</h3>
            <p className="text-gray-300">Гумористична композиція для підняття настрою.</p>
            <p className="mt-2 text-pink-400 font-semibold">Ціна: договірна</p>
            <a
              href="https://t.me/JuGGLer_L"
              className="mt-4 inline-block px-6 py-3 bg-pink-500 text-white rounded-lg hover:scale-105 transition-transform"
            >
              Замовити
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
