# README

This app is a minimal RW app sufficient to serve as a SPA, hosting tailwindcss

Is is created as described in RW tutorial up to and not included to [A Second Page and a Link](https://redwoodjs.com/docs/tutorial/chapter1/second-page).

At that point we added

```
yarn rw setup ui tailwindcss
```

Resulting with adding the following entries to evelopment log

```
nik$ yarn rw setup ui tailwind
✔ Installing project-wide packages...
  ✔ Install prettier-plugin-tailwindcss@0.4.1
✔ Installing web side packages...
  ✔ Install postcss, postcss-loader, tailwindcss, autoprefixer
✔ Configuring PostCSS...
✔ Initializing Tailwind CSS...
✔ Adding directives to index.css...
↓ Updating tailwind 'scaffold.css'...
✔ Adding recommended VS Code extensions to project settings...
✔ Adding tailwind config entry in prettier...
✔ Adding tailwind prettier plugin...
```

The package.json is added the tailwind section

<img width="386" alt="image" src="https://github.com/adriatic/fixie-logs/assets/2712405/c7629e51-592c-4a25-b6a5-d5502d28fd90">

The file index.html is changed to

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <title>Pricing Cards</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <!-- Global Container -->
    <div class="flex items-center justify-center min-h-screen bg-slate-800">
      <!-- Inner Container -->
      <div
        class="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0"
      >
        <!-- Col 1 -->
        <div class="bg-slate-700 rounded-xl text-white">
          <!-- Upper Container -->
          <div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div class="text-center uppercase">Basic</div>
            <h2 class="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 class="mt-2 text-center">$1.99/Month</h3>
            <div class="flex justify-center">
              <a
                href="#"
                class="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
                >Purchase</a
              >
            </div>
          </div>

          <!-- Border -->
          <div class="border-t border-slate-700"></div>

          <!-- Lower Container -->
          <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <!-- List Container -->
            <div class="flex flex-col space-y-2">
              <!-- List Item 1 -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">100 GB of storage</span>
              </div>

              <!-- List Item 2 -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Option to add members</span>
              </div>

              <!-- List Item 3 -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Col 2 -->
        <div class="bg-violet-600 rounded-xl text-white">
          <!-- Upper Container -->
          <div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div class="text-center uppercase">Standard</div>
            <h2 class="mt-10 font-serif text-5xl text-center">200GB</h2>
            <h3 class="mt-2 text-center">$3.99/Month</h3>
            <div class="flex justify-center">
              <a
                href="#"
                class="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 bg-violet-600 hover:bg-violet-800 hover:border-violet-800"
                >Purchase</a
              >
            </div>
          </div>

          <!-- Border -->
          <div class="border-t border-slate-700"></div>

          <!-- Lower Container -->
          <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <!-- List Container -->
            <div class="flex flex-col space-y-2">
              <!-- List Item 1 -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">200 GB of storage</span>
              </div>

              <!-- List Item 2 -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Option to add members</span>
              </div>

              <!-- List Item 3 -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Col 3 -->
        <div class="bg-slate-700 rounded-xl text-white">
          <!-- Upper Container -->
          <div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div class="text-center uppercase">Premium</div>
            <h2 class="mt-10 font-serif text-5xl text-center">2 TB</h2>
            <h3 class="mt-2 text-center">$8.99/Month</h3>
            <div class="flex justify-center">
              <a
                href="#"
                class="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
                >Purchase</a
              >
            </div>
          </div>

          <!-- Border -->
          <div class="border-t border-slate-700"></div>

          <!-- Lower Container -->
          <div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <!-- List Container -->
            <div class="flex flex-col space-y-2">
              <!-- List Item 1 -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">2 TB of storage</span>
              </div>

              <!-- List Item 2 -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Option to add members</span>
              </div>

              <!-- List Item 3 -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span class="text-sm ml-1">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  <!-- Please keep this div empty -->
  <div id="redwood-app"></div>
</body>

</html>
```

Lastly before running it the first time we run the commmand

```
npx tailwindcss -i ./web/src/index.css -o ./web/dist/output.css
```

Note that this command ensure that tailwindcss copies all of the tailwindcss configuration from ./web/src/index.css
Resulting with SPA:


<img width="1028" alt="image" src="https://github.com/adriatic/fixie-logs/assets/2712405/8c312f55-31f9-42c9-99a0-06fa1893bfad">

This is the information from the [udemy tutorial "Pricing Grids"](https://www.udemy.com/course/tailwind-from-scratch/learn/lecture/32346180#search) by Brad Traversy
