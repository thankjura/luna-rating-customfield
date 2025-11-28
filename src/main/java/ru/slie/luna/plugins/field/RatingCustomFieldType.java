package ru.slie.luna.plugins.field;

import org.bson.BsonObjectId;
import org.bson.BsonValue;
import org.bson.types.ObjectId;
import ru.slie.luna.exception.ValidateException;
import ru.slie.luna.issue.IssueContext;
import ru.slie.luna.issue.field.IssueField;
import ru.slie.luna.issue.field.annotations.IssueFieldTypeComponent;
import ru.slie.luna.issue.field.options.Option;
import ru.slie.luna.issue.field.options.OptionsManager;
import ru.slie.luna.issue.field.type.AbstractFieldType;
import ru.slie.luna.locale.I18nResolver;

import java.util.List;
import java.util.Map;

@IssueFieldTypeComponent
public class RatingCustomFieldType extends AbstractFieldType<Option, Option> {
    private final OptionsManager optionsManager;
    private final I18nResolver i18n;

    public RatingCustomFieldType(OptionsManager optionsManager,
                                 I18nResolver i18n) {
        this.optionsManager = optionsManager;
        this.i18n = i18n;
    }

    @Override
    public String getName() {
        return "Rating field type";
    }

    @Override
    public String getIconPath() {
        return "/ru.slie.luna.rating-customfield/images/rating.png";
    }

    @Override
    public List<String> getViewComponents() {
        return List.of("RatingFieldView");
    }

    @Override
    public List<String> getEditComponents() {
        return List.of("RatingFieldEdit");
    }

    @Override
    public Option getValueFromDB(IssueField field, BsonValue dbValue) {
        if (dbValue == null) {
            return null;
        }

        if (dbValue.isObjectId()) {
            ObjectId id = dbValue.asObjectId().getValue();
            return optionsManager.getOptionById(field, id.toString());
        }

        return null;
    }

    @Override
    public BsonValue getValueForDB(IssueField field, Option value) {
        if (value == null) {
            return null;
        }
        return new BsonObjectId(new ObjectId(value.getId()));
    }

    @Override
    public Option parseJson(IssueField field, IssueContext context, Object jsonValue) {
        if (jsonValue instanceof String) {
            if (ObjectId.isValid((String) jsonValue)) {
                return optionsManager.getOptionById(field, (String) jsonValue);
            } else {
                if (context != null) {
                    return optionsManager.getOptionByName(field.getContext(context), (String) jsonValue);
                } else {
                    return null;
                }
            }
        }
        if (jsonValue instanceof Map<?,?>) {
            if (((Map<?, ?>) jsonValue).containsKey("id")) {
                return optionsManager.getOptionById(field, ((Map<?, ?>) jsonValue).get("id").toString());
            }
            // TODO: set by name
        }

        return null;
    }

    @Override
    public Option toJson(IssueField field, Option value) {
        // TODO: validate context
        return value;
    }

    @Override
    public String getChangeItemString(IssueField field, Option value) {
        return getStringValue(field, value);
    }

    @Override
    public String getStringValue(IssueField field, Option value) {
        if (value == null) {
            return null;
        }
        return value.getName();
    }

    @Override
    public String getOptionsComponent() {
        return "FieldContextOptions";
    }

    @Override
    public void validateValue(IssueField field, Object value, ValidateException exception) {
        if (value != null && !(value instanceof Option)) {
            exception.addError(field.getId(), i18n.getText("app.field_type.single_select.bad_value"));
        }
    }

    @Override
    public List<String> getSupportedFieldSercherKey() {
        return List.of("ru.slie.luna.issue.field.searcher.impl.OptionsSearcher");
    }
}
