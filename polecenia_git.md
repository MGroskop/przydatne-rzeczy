Przydatne polecenia GIT 

    git init - inicjalizuje repozytorium GIT w katalogu
    git clone {adres repozytorium} - klonuje repozytorium do katalogu
    git status - pokazuje status repozytorium (pokazuje informację o zmodyfikowanych, nowych, usuniętych oraz nie należące do repozytorium plikach)
    git remote add {jakaś nazwa} {adres repozytorium} - dodaje repozytorium innego użytkownika (git remote add upstream https://github.com/bluetree-service/idylla.git)
    git remote -v lista wszystkich zewnetrznych repozytoriów
    git remote rm {nazwa dla remota} - usuwa zewnętrzne repozytorium
    git fetch {nazwa remota} - pobiera listę zmian z innego repozytorium (w tym pokazuje nowe gałęzie)
    git branch - lista gałęzi w repozytorium
    git branch -d {nazwa gałęzi} - usuwa wskazaną gałąź
    git checkout {nazwa gałęzi} - przełącza na podaną gałąź
    git checkout -b {nazwa gałęzi} - tworzy nową gałąź o podanej nazwie i automatycznie przełącza się na niego
    git checkout -b {nazwa gałęzi} {nazwa remota}/{nazwa gałęzi} - tworzy nową gałąź o podanej nazwie, pobiera zmiany ze wskazanego repozytorium i gałęzi i automatycznie przełącza się na niego
    git checkout {nazwa pliku} - cofa zmiany na podanym pliku
    git pull - pobiera zmiany z aktualnej gałęzi
    git pull {nazwa gałęzi} - pobiera zmiany z wybranej gałęzi
    git pull {nazwa remota} {nazwa gałęzi} - pobiera zmiany z wybranej gałęzi wybranego zewnętrznego repozytorium
    git push - wypycha zmiany na aktualnie wybraną gałąź
    git push {nazwa gałęzi} - wypycha zmiany na wskazaną gałąź
    git push {nazwa remota} {nazwa gałęzi} - wypycha zmiany na gałąź wskazanego repozytorium
    git add {ścierzka do pliku} - dodaje plik do repozytorium (np. git add folder/plik.php)
    git add -A - dodaje wszystkie nie należące do repozytorium pliki
    git reset --soft HEAD^ - cofa zmiany bez usuwania dodanych plików
    git reset --soft {numer commita} - cofa zmiany bez usuwania dodanych plików do wskazanego commita (git reset --soft b87dcea)
    git reset --hard {numer commita} - cofa zmiany włącznie z usunięciem plików do wskazanego commita (git reset --hard b87dced)
    git log - wyświetla listę commitów (od najnowszego)
    git log -{numer} wyświetla podaną liczbę ostatnich commitów
    git log --oneline - wyświetla commity w postaci skróconej
    git log -{numer} --oneline wyświetla podaną liczbę ostatnich commitów w postaci skróconej
    git log --graph --decorate --oneline - pokazuje graficzny obraz zmian
    git log --author={nazwa użytkownika} - pokazuje commity danego użytkownika
    git shortlog - lista commitów użytkowników
    git shortlog -s -n - lista użytkowników repozytorium
    git revert {numer commita} - tworzy nowego commita z cofnięciem zmian ze wskazanego commita
    git merge {nazwa gałęzi} - dołączenie zmian ze wskazanej gałęzi
    git merge {nazwa remota}/{nazwa gałęzi} - dołączenie zmian ze wskazanego remota i gałęzi
    git reset --merge ORIG_HEAD - resetuje zmiany z ostatniego merg-a
    git rebase {nazwa gałęzi} - dołączenie zmian ze wskazanej gałęzi z zachowaniem kolejności wprowadzania zmian
    git rebase {nazwa remota}/{nazwa gałęzi} - dołączenie zmian ze wskazanego repozytorium i gałęzi z zachowaniem kolejności wprowadzania zmian
    git rebase --abort - przerywa łączenie (możliwe, gdy wystąpią konflikty)
    git merge --abort - przerywa łączenie (możliwe, gdy wystąpią konflikty)
    git stash - zapisuje nowe i zmodyfikowane pliki do pamięci podręcznej
    git stash pop - przywraca zapisane pliki z pamięci podręcznej
    git config --global color.ui auto - włącza koloryzowanie wyników w konsoli
    git commit - tworzy commita z aktualnie zmienionych plików
    git commit -m "wiadomosc" - tworzy commmita z podaną w cudzysłowach wiadomością
    git commit --amend -m "{wiadomość}" - umożliwia zmianę ostatniego commita
    git diff --name-only {gałąź 1} {gałąź 2} - porównanie dwóch gałęzi
    q - wyjście z widoku (np. w przypadku długiego git log)
    git show {commit} - szczegóły podanego commita
    git log --author={autor} --name-only - pokazuje commity wykonane przez autora wraz ze zmodyfikowanymi plikami
    git tag -l - lista tagów
    git rm {plik} - usuwa plik z repo
    git config --global core.pager '{nazwa}' - ustawia program do przeglądania logów (brak w konsoli)
    git tag -a {} -m '{}' -
    git push --tags - wysyła tagi na repo
    git lasttag - pokazuje ostatniego taga
    git stash list - lista zachowanych zmian
    git remote -v - lista repo
    git diff {commit} - rożnica od podanego commita
    git fetch -p - kasuje branche już nie istniejąca na głównym repo
    git tag -d pull -
    git remote remove {repo} - usuwa wskazane repo
    git branch rename {stara nazwa} {nowa nazwa} - zmiana nazwy brancha
    git remote set-url {nazwa repo} {url} - zmienia adres dla podanego repo
    git log --grep {nazwa} - szuka commita zawierającego podany tekst
    git branch -a - pokazuje listę wszystkich gałęzi (łącznie z tymi z repo, same z repo -r)
    git log master..develop - pokazuje różnicę między branchami
