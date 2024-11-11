import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';

export default function Skills() {
  return (
    <section className="py-16 bg-black" id="skills">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-4xl font-bold text-center text-white mb-8">
          My <span className="text-pink-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Skill 1 */}
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <FaReact className="text-blue-600 text-3xl mr-2" />
              <h3 className="text-2xl font-serif text-white">React</h3>
            </div>
            <div className="w-full bg-gray-300 rounded-full">
              <div
                className="bg-pink-500 text-xs font-medium text-indigo-100 text-center p-1 leading-none rounded-full"
                style={{ width: '80%' }}
              >
                80%
              </div>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <FaNodeJs className="text-green-600 text-3xl mr-2" />
              <h3 className="text-2xl font-serif text-white">Next JS</h3>
            </div>
            <div className="w-full bg-gray-300 rounded-full">
              <div
                className="bg-pink-600 text-xs font-medium text-green-100 text-center p-1 leading-none rounded-full"
                style={{ width: '70%' }}
              >
                70%
              </div>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <FaCss3Alt className="text-blue-500 text-3xl mr-2" />
              <h3 className="text-2xl font-serif text-white">CSS3</h3>
            </div>
            <div className="w-full bg-gray-300 rounded-full">
              <div
                className="bg-pink-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                style={{ width: '90%' }}
              >
                90%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
