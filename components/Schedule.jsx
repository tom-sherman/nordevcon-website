import Talks from './Talks';
import { format } from 'date-fns';

export default ({ schedule, speakers }) => (
  <section className="p-4 bg-purple-700 text-purple-100">
    <ol>
      {
        Object.keys(schedule)
              .sort()
              .map((start, index, dates) => (
                <>
                  {
                    (index === 0 || new Date(start).getDate() !== new Date(dates[index-1]).getDate())
                      ? (
                          <li className="py-4 font-bold text-3xl text-purple-300">
                            { format(new Date(start), "do LLLL") }
                          </li>
                        )
                      : ""
                  }
                  <li key={start} className="flex py-2 border-b border-purple-100">
                    <div className="mr-4 font-bold text-3xl text-purple-300 align-top leading-none">
                      { format(new Date(start), "HH:mm") }
                    </div>

                    <div className="flex-grow">
                      <Talks talks={schedule[start]} speakers={speakers} />
                    </div>
                  </li>
                </>
              ))
      }
    </ol>
  </section>
)