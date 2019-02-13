'use strict';

/*

Main javascript functions to init most of the elements

#1. CHAT APP
#2. CALENDAR INIT
#3. FORM VALIDATION
#4. DATE RANGE PICKER
#5. DATATABLES
#6. EDITABLE TABLES
#7. FORM STEPS FUNCTIONALITY
#8. SELECT 2 ACTIVATION
#9. CKEDITOR ACTIVATION
#10. CHARTJS CHARTS http://www.chartjs.org/
#11. MENU RELATED STUFF
#12. CONTENT SIDE PANEL TOGGLER
#13. EMAIL APP
#14. FULL CHAT APP
#15. CRM PIPELINE
#16. OUR OWN CUSTOM DROPDOWNS
#17. BOOTSTRAP RELATED JS ACTIVATIONS
#18. TODO Application
#19. Fancy Selector
#20. SUPPORT SERVICE
#21. Onboarding Screens Modal
#22. Colors Toggler
#23. Auto Suggest Search
#24. Element Actions

*/

// ------------------------------------
// HELPER FUNCTIONS TO TEST FOR SPECIFIC DISPLAY SIZE (RESPONSIVE HELPERS)
// ------------------------------------

function is_display_type(display_type) {
  return $('.display-type').css('content') == display_type || $('.display-type').css('content') == '"' + display_type + '"';
}
function not_display_type(display_type) {
  return $('.display-type').css('content') != display_type && $('.display-type').css('content') != '"' + display_type + '"';
}

// Initiate on click and on hover sub menu activation logic
function os_init_sub_menus() {

  // INIT MENU TO ACTIVATE ON HOVER
  var menu_timer;
  $('.menu-activated-on-hover').on('mouseenter', 'ul.main-menu > li.has-sub-menu', function () {
    var $elem = $(this);
    clearTimeout(menu_timer);
    $elem.closest('ul').addClass('has-active').find('> li').removeClass('active');
    $elem.addClass('active');
  });

  $('.menu-activated-on-hover').on('mouseleave', 'ul.main-menu > li.has-sub-menu', function () {
    var $elem = $(this);
    menu_timer = setTimeout(function () {
      $elem.removeClass('active').closest('ul').removeClass('has-active');
    }, 30);
  });

  // INIT MENU TO ACTIVATE ON CLICK
  $('.menu-activated-on-click').on('click', 'li.has-sub-menu > a', function (event) {
    var $elem = $(this).closest('li');
    if ($elem.hasClass('active')) {
      $elem.removeClass('active');
    } else {
      $elem.closest('ul').find('li.active').removeClass('active');
      $elem.addClass('active');
    }
    return false;
  });
}

$(function () {

  // #1. CHAT APP

  $('.floated-chat-btn, .floated-chat-w .chat-close').on('click', function () {
    $('.floated-chat-w').toggleClass('active');
    return false;
  });


  // #2. CALENDAR INIT

  if ($("#fullCalendar").length) {
    var calendar, d, date, m, y;

    date = new Date();

    d = date.getDate();

    m = date.getMonth();

    y = date.getFullYear();

    calendar = $("#fullCalendar").fullCalendar({
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      selectable: true,
      selectHelper: true,
      select: function select(start, end, allDay) {
        var title;
        title = prompt("Event Title:");
        if (title) {
          calendar.fullCalendar("renderEvent", {
            title: title,
            start: start,
            end: end,
            allDay: allDay
          }, true);
        }
        return calendar.fullCalendar("unselect");
      },
      editable: true,
      events: [{
        title: "Long Event",
        start: new Date(y, m, 3, 12, 0),
        end: new Date(y, m, 7, 14, 0)
      }, {
        title: "Lunch",
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d + 2, 14, 0),
        allDay: false
      }, {
        title: "Click for Google",
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: "http://google.com/"
      }]
    });
  }


  // #7. FORM STEPS FUNCTIONALITY

  $('.step-trigger-btn').on('click', function () {
    var btn_href = $(this).attr('href');
    $('.step-trigger[href="' + btn_href + '"]').click();
    return false;
  });

  // FORM STEP CLICK
  $('.step-trigger').on('click', function () {
    var prev_trigger = $(this).prev('.step-trigger');
    if (prev_trigger.length && !prev_trigger.hasClass('active') && !prev_trigger.hasClass('complete')) return false;
    var content_id = $(this).attr('href');
    $(this).closest('.step-triggers').find('.step-trigger').removeClass('active');
    $(this).prev('.step-trigger').addClass('complete');
    $(this).addClass('active');
    $('.step-content').removeClass('active');
    $('.step-content' + content_id).addClass('active');
    return false;
  });
  // END STEPS FUNCTIONALITY

  // #10. CHARTJS CHARTS http://www.chartjs.org/

  // #11. MENU RELATED STUFF

  // INIT MOBILE MENU TRIGGER BUTTON
  $('.mobile-menu-trigger').on('click', function () {
    $('.menu-mobile .menu-and-user').slideToggle(200, 'swing');
    return false;
  });

  os_init_sub_menus();

  // #12. CONTENT SIDE PANEL TOGGLER

  $('.content-panel-toggler, .content-panel-close, .content-panel-open').on('click', function () {
    $('.all-wrapper').toggleClass('content-panel-active');
  });

  // #13. EMAIL APP

  $('.more-messages').on('click', function () {
    $(this).hide();
    $('.older-pack').slideDown(100);
    $('.aec-full-message-w.show-pack').removeClass('show-pack');
    return false;
  });

  $('.ae-list .ae-item').on('click', function () {
    $('.ae-item.active').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  // EMAIL SIDEBAR MENU TOGGLER
  $('.ae-side-menu-toggler').on('click', function () {
    $('.app-email-w').toggleClass('compact-side-menu');
  });

  // EMAIL MOBILE SHOW MESSAGE
  $('.ae-item').on('click', function () {
    $('.app-email-w').addClass('forse-show-content');
  });

  if ($('.app-email-w').length) {
    if (is_display_type('phone') || is_display_type('tablet')) {
      $('.app-email-w').addClass('compact-side-menu');
    }
  }

  // #14. FULL CHAT APP
  function add_full_chat_message($input) {
    $('.chat-content').append('<div class="chat-message self"><div class="chat-message-content-w"><div class="chat-message-content">' + $input.val() + '</div></div><div class="chat-message-date">1:23pm</div><div class="chat-message-avatar"><img alt="" src="img/avatar1.jpg"></div></div>');
    $input.val('');
    var $messages_w = $('.chat-content-w');
    $messages_w.scrollTop($messages_w[0].scrollHeight);
  }

  $('.chat-btn a').on('click', function () {
    add_full_chat_message($('.chat-input input'));
    return false;
  });
  $('.chat-input input').on('keypress', function (e) {
    if (e.which == 13) {
      add_full_chat_message($(this));
      return false;
    }
  });

  // #15. CRM PIPELINE
  if ($('.pipeline').length) {
    // INIT DRAG AND DROP FOR PIPELINE ITEMS
    var dragulaObj = dragula($('.pipeline-body').toArray(), {}).on('drag', function () {}).on('drop', function (el) {}).on('over', function (el, container) {
      $(container).closest('.pipeline-body').addClass('over');
    }).on('out', function (el, container, source) {

      var new_pipeline_body = $(container).closest('.pipeline-body');
      new_pipeline_body.removeClass('over');
      var old_pipeline_body = $(source).closest('.pipeline-body');
    });
  }

  // #16. OUR OWN CUSTOM DROPDOWNS
  $('.os-dropdown-trigger').on('mouseenter', function () {
    $(this).addClass('over');
  });
  $('.os-dropdown-trigger').on('mouseleave', function () {
    $(this).removeClass('over');
  });

  // #18. TODO Application

  // Tasks foldable trigger
  $('.tasks-header-toggler').on('click', function () {
    $(this).closest('.tasks-section').find('.tasks-list-w').slideToggle(100);
    return false;
  });

  // Sidebar Sections foldable trigger
  $('.todo-sidebar-section-toggle').on('click', function () {
    $(this).closest('.todo-sidebar-section').find('.todo-sidebar-section-contents').slideToggle(100);
    return false;
  });

  // Sidebar Sub Sections foldable trigger
  $('.todo-sidebar-section-sub-section-toggler').on('click', function () {
    $(this).closest('.todo-sidebar-section-sub-section').find('.todo-sidebar-section-sub-section-content').slideToggle(100);
    return false;
  });

  // Drag init
  if ($('.tasks-list').length) {
    // INIT DRAG AND DROP FOR Todo Tasks
    var dragulaTasksObj = dragula($('.tasks-list').toArray(), {
      moves: function moves(el, container, handle) {
        return handle.classList.contains('drag-handle');
      }
    }).on('drag', function () {}).on('drop', function (el) {}).on('over', function (el, container) {
      $(container).closest('.tasks-list').addClass('over');
    }).on('out', function (el, container, source) {

      var new_pipeline_body = $(container).closest('.tasks-list');
      new_pipeline_body.removeClass('over');
      var old_pipeline_body = $(source).closest('.tasks-list');
    });
  }

  // Task actions init

  // Complete/Done
  $('.task-btn-done').on('click', function () {
    $(this).closest('.draggable-task').toggleClass('complete');
    return false;
  });

  // Favorite/star
  $('.task-btn-star').on('click', function () {
    $(this).closest('.draggable-task').toggleClass('favorite');
    return false;
  });

  // Delete
  var timeoutDeleteTask;
  $('.task-btn-delete').on('click', function () {
    if (confirm('Are you sure you want to delete this task?')) {
      var $task_to_remove = $(this).closest('.draggable-task');
      $task_to_remove.addClass('pre-removed');
      $task_to_remove.append('<a href="#" class="task-btn-undelete">Undo Delete</a>');
      timeoutDeleteTask = setTimeout(function () {
        $task_to_remove.slideUp(300, function () {
          $(this).remove();
        });
      }, 5000);
    }
    return false;
  });

  $('.tasks-list').on('click', '.task-btn-undelete', function () {
    $(this).closest('.draggable-task').removeClass('pre-removed');
    $(this).remove();
    if (typeof timeoutDeleteTask !== 'undefined') {
      clearTimeout(timeoutDeleteTask);
    }
    return false;
  });

  // #19. Fancy Selector
  $('.fs-selector-trigger').on('click', function () {
    $(this).closest('.fancy-selector-w').toggleClass('opened');
  });

  // #20. SUPPORT SERVICE

  $('.close-ticket-info').on('click', function () {
    $('.support-ticket-content-w').addClass('folded-info').removeClass('force-show-folded-info');
    return false;
  });

  $('.show-ticket-info').on('click', function () {
    $('.support-ticket-content-w').removeClass('folded-info').addClass('force-show-folded-info');
    return false;
  });

  $('.support-index .support-tickets .support-ticket').on('click', function () {
    $('.support-index').addClass('show-ticket-content');
    return false;
  });

  $('.support-index .back-to-index').on('click', function () {
    $('.support-index').removeClass('show-ticket-content');
    return false;
  });


  // #23. Autosuggest Search
  $('.autosuggest-search-activator').on('click', function () {
    var search_offset = $(this).offset();
    // If input field is in the activator - show on top of it
    if ($(this).find('input[type="text"]')) {
      search_offset = $(this).find('input[type="text"]').offset();
    }
    var search_field_position_left = search_offset.left;
    var search_field_position_top = search_offset.top;
    $('.search-with-suggestions-w').css('left', search_field_position_left).css('top', search_field_position_top).addClass('over-search-field').fadeIn(300).find('.search-suggest-input').focus();
    return false;
  });

  $('.search-suggest-input').on('keydown', function (e) {

    // Close if ESC was pressed
    if (e.which == 27) {
      $('.search-with-suggestions-w').fadeOut();
    }

    // Backspace/Delete pressed
    if (e.which == 46 || e.which == 8) {
      // This is a test code, remove when in real life usage
      $('.search-with-suggestions-w .ssg-item:last-child').show();
      $('.search-with-suggestions-w .ssg-items.ssg-items-blocks').show();
      $('.ssg-nothing-found').hide();
    }

    // Imitate item removal on search, test code
    if (e.which != 27 && e.which != 8 && e.which != 46) {
      // This is a test code, remove when in real life usage
      $('.search-with-suggestions-w .ssg-item:last-child').hide();
      $('.search-with-suggestions-w .ssg-items.ssg-items-blocks').hide();
      $('.ssg-nothing-found').show();
    }
  });

  $('.close-search-suggestions').on('click', function () {
    $('.search-with-suggestions-w').fadeOut();
    return false;
  });

  // #24. Element Actions
  $('.element-action-fold').on('click', function () {
    var $wrapper = $(this).closest('.element-wrapper');
    $wrapper.find('.element-box-tp, .element-box').toggle(0);
    var $icon = $(this).find('i');

    if ($wrapper.hasClass('folded')) {
      $icon.removeClass('os-icon-plus-circle').addClass('os-icon-minus-circle');
      $wrapper.removeClass('folded');
    } else {
      $icon.removeClass('os-icon-minus-circle').addClass('os-icon-plus-circle');
      $wrapper.addClass('folded');
    }
    return false;
  });
});
