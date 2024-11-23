using library_otomation.Models;
using Microsoft.AspNetCore.Mvc;

namespace library_otomation.Controllers
{
    public class LibraryController : Controller
    {
        private readonly Library Lib; // lib nesnesi Dependency Injection ile oluşturulur

        // dependency injection: bir sınıfın başka bir sınıfı kullanabilmesi
        // için gerekli olan nesnenin dışarıdan verilmesi işlemidir

        public LibraryController(Library lib)
        {
            Lib = lib;
        }

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Add(int year, string name, string author)
        { 
            var book = new Book(year, name, author);
            Lib.addBook(book);
            TempData["Message"] = "Book added successfully";
            return View("Index");
        }

        public IActionResult Remove(string name)
        {
            Lib.removeBook(name);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult SearchByName(string name)
        {
            var books = Lib.searchByName(name);
            return View(books);
        }

        [HttpGet]
        public IActionResult SearchByAuthor(string author)
        { 
            var books = Lib.searchByAuthor(author);
            return View(books);
        }

        [HttpGet]
        public IActionResult SearchByYear(int year)
        {
            var books = Lib.searchByYear(year);
            return View(books);
        }

        [HttpGet]
        public IActionResult ListAllBooks()
        {
            var books = Lib.listAllBooks();
            return View("Index");
        }
    }
}
