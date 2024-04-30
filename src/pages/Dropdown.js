import React from 'react'

export default function Dropdown() {
  return (
    <div>
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Breeds of cats
                </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="https://en.wikipedia.org/wiki/Persian_cat">Persian </a></li>
                <li><a class="dropdown-item" href="#">Maine coon</a></li>
                <li><a class="dropdown-item" href="#">Bengal cat</a></li>
                <li><a class="dropdown-item" href="#">Siamese</a></li>
                <li><a class="dropdown-item" href="#">Ragdoll</a></li>
                <li><a class="dropdown-item" href="#">Scottish fold</a></li>
            </ul>
                    </div>
                        </div>
  )
}
