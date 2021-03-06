import {gn} from '../utils/lib';
import Localization from '../utils/Localization';

export function inappAbout () {
    gn('aboutWhatIs').textContent = Localization.localize('ABOUT_WHAT_IS');
    gn('aboutDescription').innerHTML = Localization.localize('ABOUT_DESCRIPTION') + '<br/><br/>' +
        Localization.localize('ABOUT_INSPIRED_BY');
    gn('aboutWhyCreate').textContent = Localization.localize('ABOUT_WHY_CREATE');
    gn('aboutWhyCreateDescription').innerHTML = Localization.localize('ABOUT_WHY_CREATE_DESCRIPTION');

    // PBS-only
    if (window.Settings.edition == 'PBS') {
        gn('aboutWhatIsPbs').innerHTML = Localization.localize('ABOUT_WHAT_IS_PBS');
        gn('aboutWhatIsPbsDescription').innerHTML = Localization.localize('ABOUT_WHAT_IS_PBS_DESCRIPTION');
        gn('aboutPbsShows').innerHTML = Localization.localize('ABOUT_PBS_SHOWS');
        gn('aboutPbsShowsDescription').innerHTML = Localization.localize('ABOUT_PBS_SHOWS_DESCRIPTION');
    }
}

export function inappInterfaceGuide () {
    // Localized category names
    gn('orange-block-category-header').textContent = Localization.localize('SMART_BLOCKS');
    gn('yellow-block-category-header').textContent = Localization.localize('HOW_TO_USE');

    var blockDescriptionKeys = [
        'LED',
        'LED_DESCRIPTION',
        'SIGNAGE',
        'SIGNAGE_DESCRIPTION',
        'NUMBER',
        'NUMBER_DESCRIPTION',
        'WORD',
        'WORD_DESCRIPTION',
        'MOTOR',
        'MOTOR_DESCRIPTION',
        'SPEAKER',
        'SPEAKER_DESCRIPTION',
        'INFORMATION',
        'INFO_DESCRIPTION1',
        'INFO_DESCRIPTION2',
        'INFO_DESCRIPTION3',
        'CHARGING',
        'CHARGING_DESCRIPTION',
        'SWITCH',
        'SWITCH_DESCRIPTION'
    ];

    for (let i = 0; i < blockDescriptionKeys.length; i++) {
        gn(blockDescriptionKeys[i]).textContent = Localization.localize(blockDescriptionKeys[i]);
    }
}

export function inappPaintEditorGuide () {
    // Localized category names
    gn('purple-block-category-header').textContent = Localization.localize('BLOCKS_BASIC_BLOCKS');
    gn('green-block-category-header').textContent = Localization.localize('BLOCKS_LED_BLOCKS');
    gn('blue-block-category-header').textContent = Localization.localize('BLOCKS_MOTOR_BLOCKS');
    gn('orange-block-category-header').textContent = Localization.localize('BLOCKS_SPEAKER_BLOCKS');

    var blockDescriptionKeys = [
        'BLOCKS_START',
        'BLOCKS_START_DESCRIPTION',
        'BLOCKS_REPEAT_FOREVER',
        'BLOCKS_REPEAT_FOREVER_DESCRIPTION',
        'BLOCKS_DELAY',
        'BLOCKS_DELAY_DESCRIPTION',
        'BLOCKS_END',
        'BLOCKS_END_DESCRIPTION',
        'BLOCKS_REPEAT',
        'BLOCKS_REPEAT_DESCRIPTION',
        'BLOCKS_MOVE_RIGHT',
        'BLOCKS_MOVE_RIGHT_DESCRIPTION',
        'BLOCKS_MOVE_LEFT',
        'BLOCKS_MOVE_LEFT_DESCRIPTION',
        'BLOCKS_MOVE_UP',
        'BLOCKS_MOVE_UP_DESCRIPTION',
        'BLOCKS_MOVE_DOWN',
        'BLOCKS_MOVE_DOWN_DESCRIPTION',
        'BLOCKS_STOP',
        'BLOCKS_STOP_DESCRIPTION',
        'BLOCKS_RED_LED',
        'BLOCKS_RED_LED_DESCRIPTION',
        'BLOCKS_GREEN_LED',
        'BLOCKS_GREEN_LED_DESCRIPTION',
        'BLOCKS_BLUE_LED',
        'BLOCKS_BLUE_LED_DESCRIPTION',
        'BLOCKS_TURN_OFF',
        'BLOCKS_TURN_OFF_DESCRIPTION',
        'BLOCKS_SPEAKER',
        'BLOCKS_SPEAKER_DESCRIPTION'
    ];

    for (let i = 0; i < blockDescriptionKeys.length; i++) {
        gn(blockDescriptionKeys[i]).textContent = Localization.localize(blockDescriptionKeys[i]);
    }
}

export function inappBlocksGuide () {
    // Localized category names
    gn('yellow-block-category-header').textContent = Localization.localize('BLOCKS_TRIGGERING_BLOCKS');
    gn('blue-block-category-header').textContent = Localization.localize('BLOCKS_MOTION_BLOCKS');
    gn('purple-block-category-header').textContent = Localization.localize('BLOCKS_LOOKS_BLOCKS');
    gn('green-block-category-header').textContent = Localization.localize('BLOCKS_SOUND_BLOCKS');
    gn('orange-block-category-header').textContent = Localization.localize('BLOCKS_CONTROL_BLOCKS');
    gn('red-block-category-header').textContent = Localization.localize('BLOCKS_END_BLOCKS');

    var blockDescriptionKeys = [
        'BLOCKS_GREEN_FLAG',
        'BLOCKS_GREEN_FLAG_DESCRIPTION',
        'BLOCKS_ON_TAP',
        'BLOCKS_ON_TAP_DESCRIPTION',
        'BLOCKS_ON_TOUCH',
        'BLOCKS_ON_TOUCH_DESCRIPTION',
        'BLOCKS_ON_MESSAGE',
        'BLOCKS_ON_MESSAGE_DESCRIPTION',
        'BLOCKS_SEND_MESSAGE',
        'BLOCKS_SEND_MESSAGE_DESCRIPTION',
        'BLOCKS_MOVE_RIGHT',
        'BLOCKS_MOVE_RIGHT_DESCRIPTION',
        'BLOCKS_MOVE_LEFT',
        'BLOCKS_MOVE_LEFT_DESCRIPTION',
        'BLOCKS_MOVE_UP',
        'BLOCKS_MOVE_UP_DESCRIPTION',
        'BLOCKS_MOVE_DOWN',
        'BLOCKS_MOVE_DOWN_DESCRIPTION',
        'BLOCKS_TURN_RIGHT',
        'BLOCKS_TURN_RIGHT_DESCRIPTION',
        'BLOCKS_TURN_LEFT',
        'BLOCKS_TURN_LEFT_DESCRIPTION',
        'BLOCKS_HOP',
        'BLOCKS_HOP_DESCRIPTION',
        'BLOCKS_GO_HOME',
        'BLOCKS_GO_HOME_DESCRIPTION',
        'BLOCKS_SAY',
        'BLOCKS_SAY_DESCRIPTION',
        'BLOCKS_GROW',
        'BLOCKS_GROW_DESCRIPTION',
        'BLOCKS_SHRINK',
        'BLOCKS_SHRINK_DESCRIPTION',
        'BLOCKS_RESET_SIZE',
        'BLOCKS_RESET_SIZE_DESCRIPTION',
        'BLOCKS_HIDE',
        'BLOCKS_HIDE_DESCRIPTION',
        'BLOCKS_SHOW',
        'BLOCKS_SHOW_DESCRIPTION',
        'BLOCKS_POP',
        'BLOCKS_POP_DESCRIPTION',
        'BLOCKS_PLAY_RECORDED',
        'BLOCKS_PLAY_RECORDED_DESCRIPTION',
        'BLOCKS_WAIT',
        'BLOCKS_WAIT_DESCRIPTION',
        'BLOCKS_STOP',
        'BLOCKS_STOP_DESCRIPTION',
        'BLOCKS_SET_SPEED',
        'BLOCKS_SET_SPEED_DESCRIPTION',
        'BLOCKS_REPEAT',
        'BLOCKS_REPEAT_DESCRIPTION',
        'BLOCKS_END',
        'BLOCKS_END_DESCRIPTION',
        'BLOCKS_REPEAT_FOREVER',
        'BLOCKS_REPEAT_FOREVER_DESCRIPTION',
        'BLOCKS_GO_TO_PAGE',
        'BLOCKS_GO_TO_PAGE_DESCRIPTION'
    ];

    for (let i = 0; i < blockDescriptionKeys.length; i++) {
        gn(blockDescriptionKeys[i]).textContent = Localization.localize(blockDescriptionKeys[i]);
    }
}
