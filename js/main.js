$(function () {
    var search = function (searchText) {
        $('.gsc-input [name="search"]').val(searchText);
        $('.gsc-search-box').find('[type="image"]').click();
    };

    var searchView = $('.site-search');
    searchView.getSearchText = function () {
        return this.find('.inp-search').val();
    };
    searchView.getFocus = function(){
        this.find('.inp-search').focus();  
    };
    searchView.show = function(callback){
        $(this).show('slide', {direction:'right'}, callback);
    };
    searchView.hide = function(){
        $(this).hide('slide', {direction:'right'});
    };
    searchView.clear = function(){
        $(this).find('input').val(null);
    };
    
    searchView.on('click', '.btn-search', function (e) {
        search(searchView.getSearchText());
        e.preventDefault();
    });
    searchView.on('keydown', '.inp-search', function (e) {
        if (e.keyCode == 13) { //key enter
            search(searchView.getSearchText());
        }
        if (e.keyCode == 27) { //key esc
            searchView.hide();
            searchView.clear();
        }
    });

    var toggleSearch = $('.toggle-search');
    toggleSearch.on('click', function () {
        searchView.show(function(){
            searchView.getFocus();
        })
    }); 
});